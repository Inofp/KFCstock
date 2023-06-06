import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  if (req.method === 'POST') {
    const productId = req.body.productId;
    const userId = new ObjectId(req.body.userId);

    try {
      await client.connect();
      const collection = client.db('kfc').collection('users');

      await collection.updateOne({ _id: new ObjectId(userId) }, { $push: { favorites: productId } });

      res.status(200).json({ success: true, message: 'Product added to favorites' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'DELETE') {
    const productId = req.body.productId;
    const userId = new ObjectId(req.body.userId);

    try {
      await client.connect();
      const collection = client.db('kfc').collection('users');

      await collection.updateOne({ _id: new ObjectId(userId) }, { $pull: { favorites: productId } });

      res.status(200).json({ success: true, message: 'Product removed from favorites' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'GET') {
    const userId = req.query.userId; 
  
    try {
      await client.connect();
      const collection = client.db('kfc').collection('users');
  
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
