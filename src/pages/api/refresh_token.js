import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId  } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const refreshToken = req.body.refreshToken;


    if (!refreshToken) {
      return res.status(403).json({ success: false, message: 'Refresh token is required' });
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, userData) => {

      if (err) {
        return res.status(403).json({ success: false, message: 'Invalid refresh token' });
      }

      const uri = process.env.MONGODB_URI;
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

      try {
        await client.connect();
        const collection = client.db('kfc').collection('users');

        const user = await collection.findOne({ _id: new ObjectId(userData.id) });


        if (!user) {
          return res.status(400).json({ success: false, message: 'User not found' });
        }

        const accessToken = jwt.sign(
          { id: user._id, login: user.login }, 
          process.env.JWT_SECRET, 
          { expiresIn: '15m' }
        );


        return res.status(200).json({ success: true, accessToken });
      } finally {
        await client.close();
      }
    });
    
  } else {
    return res.status(405).json({ success: false, message: 'Invalid request method' });
  }
}
