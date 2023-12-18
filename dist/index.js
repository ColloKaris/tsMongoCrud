import { MongoClient } from 'mongodb';
import { uri } from './atlas_uri.js';
// use MongoClient to initialize a connection with the database
let client;
const dbname = "bank";
const collection_name = "accounts";
const connectToDatabase = async () => {
    try {
        client = await MongoClient.connect(uri); // this is where we initialize a connection to the db
        console.log(`Connected to the ${dbname} database`);
        return client;
    }
    catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
};
// Document to insert
const sampleAccount = {
    account_holder: "Linux Torvalds",
    account_id: "MDB829001337",
    account_type: "checking",
    balance: 50352434,
    last_updated: new Date()
};
const sampleAccounts = [
    {
        account_id: "MDB011235813",
        account_holder: "Ada Lovelace",
        account_type: "checking",
        balance: 60218,
    },
    {
        account_id: "MDB829000001",
        account_holder: "Muhamad Musa",
        account_type: "savings",
        balance: 267914296
    }
];
// A main function that executes the connectToDatabase function
const main = async () => {
    try {
        const client = await connectToDatabase();
        if (client) { // type guard
            const accountsCollection = client.db(dbname).collection(collection_name);
            let result = await accountsCollection.insertMany(sampleAccounts);
            console.log(result);
        }
    }
    catch (err) {
        console.log(`Error connecting to the database: ${err}`);
    }
    finally {
        await client.close();
    }
};
// Run the main function
main();
//# sourceMappingURL=index.js.map