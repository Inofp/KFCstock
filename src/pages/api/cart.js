import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const collection = client.db('kfc').collection('cart');

  const userId = req.body.userId;

  if (req.method === 'POST') {
    const cartItems = req.body.cartItems;
    await collection.updateOne({ userId: userId }, { $set: { cartItems } }, { upsert: true });
    res.status(200).json({ success: true, message: 'Cart updated' });
  } else if (req.method === 'GET') {
    const userId = req.query.userId; 
    const cart = await collection.findOne({ userId: userId });
    res.status(200).json({ success: true, cartItems: cart ? cart.cartItems : [] });
  } else {
    res.status(405).json({ success: false, message: 'Invalid request method' });
  }
  
  await client.close();
}
