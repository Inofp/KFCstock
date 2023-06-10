import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const collection = client.db('kfc').collection('users');
  const productId = req.body.productId;
  const userId = new ObjectId(req.body.userId);

  if (req.method === 'POST') {
    
    try {
      await collection.updateOne({ _id: userId }, { $push: { favorites: Number(productId) } });

      res.status(200).json({ success: true, message: 'Product added to favorites' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      
      await client.close();
    }
  } else if (req.method === 'DELETE') {

    try {
      await collection.updateOne({ _id: userId }, { $pull: { favorites: Number(productId) } });
      res.status(200).json({ success: true, message: 'Product removed from favorites' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'GET') {
    const userId = req.query.userId; 
  
    try {
      const user = await collection.findOne({ _id: new ObjectId(userId) }); 
  
      if (user) {
        res.status(200).json({ success: true, favorites: user.favorites });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ success: false, message: 'Invalid request method' });
  }
  
}
