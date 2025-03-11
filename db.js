const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'blog';

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected successfully to MongoDB');
  const db = client.db(dbName);
  return { client, db };
}

module.exports = { connectDB };