import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Invalid request method' });
    return;
  }

  const { login, password } = req.body;

  if (!login || !password) {
    res.status(400).json({ message: 'Login and password are required' });
    return;
  }

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db("kfc").collection("users");

    const userExists = await collection.findOne({ login });

    if (userExists) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await collection.insertOne({ login, password: hashedPassword });

    res.status(201).json({ message: 'User created', userId: result.insertedId });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    await client.close();
  }
}