import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
      await client.connect();
      const collection = client.db('kfc').collection('users');
      
      const user = await collection.findOne({ login: req.body.login });

      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }
      
      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid password' });
      }

      const accessToken = jwt.sign(
        { id: user._id, login: user.login }, 
        process.env.JWT_SECRET, 
        { expiresIn: '15m' } 
      );

      const refreshToken = jwt.sign(
        { id: user._id }, 
        process.env.JWT_REFRESH_SECRET, 
        { expiresIn: '7d' } 
      );

   

      return res.status(200).json({ 
        success: true, 
        accessToken, 
        refreshToken,
        user: {
          id: user._id,
          login: user.login,
          favorites: user.favorites,
        } 
      });
      

    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  }
  
  return res.status(405).json({ success: false, message: 'Invalid request method' });
}
