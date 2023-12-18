import { MongoClient } from 'mongodb';
import { uri } from './atlas_uri.js';

// use MongoClient to initialize a connection with the database
// const client = MongoClient.connect(uri)
const dbname = "bank";
let client:MongoClient;

const connectToDatabase = async () => {
  try {
    client = await MongoClient.connect(uri); // this is where we initialize a connection to the db
    console.log(`Connected to the ${dbname} database`);
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`)
  }
}

// A main function that executes the connectToDatabase function
const main = async () => {
  try {
    await connectToDatabase();
  } catch(err) {
    console.log(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
}

// Run the main function
main();