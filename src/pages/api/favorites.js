import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../db/dbConnect';

export default async function handler(req, res) {
  const client = await connectToDatabase(process.env.MONGODB_URI);
  const collection = client.db('kfc').collection('users');

  try {
    if (req.method === 'POST') {
      const { userId, productId } = req.body;
      await collection.updateOne({ _id: new ObjectId(userId) }, { $push: { favorites: Number(productId) } });
      res.status(200).json({ success: true, message: 'Product added to favorites' });
    } else if (req.method === 'DELETE') {
      const { userId, productId } = req.query;
      await collection.updateOne({ _id: new ObjectId(userId) }, { $pull: { favorites: Number(productId) } });
      res.status(200).json({ success: true, message: 'Product removed from favorites' });
    } else if (req.method === 'GET') {
      const { userId } = req.query;
      const user = await collection.findOne({ _id: new ObjectId(userId) });

      if (user) {
        res.status(200).json({ success: true, favorites: user.favorites });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } else {
      res.status(405).json({ success: false, message: 'Invalid request method' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  } 
}
