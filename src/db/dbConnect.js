import { MongoClient } from 'mongodb';

let client;

export async function connectToDatabase(uri) {
  if (client && client.topology && client.topology.isConnected()) {
    return client;
  }

  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client;
}


