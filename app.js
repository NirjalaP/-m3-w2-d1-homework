// var stats =[
//     {
//         'city': 'San Juan', 
//         'zip': '00926', 
//         'state': 'PR', 
//         'income': '34781',
//         'age': '44'
//     },
//     {
//         'city': 'Corona', 
//         'zip': '11368', 
//         'state': 'NY', 
//         'income': '50797',
//         'age': '32'
//     },
//     {
//         'city': 'Chicago', 
//         'zip': '60629', 
//         'state': 'IL', 
//         'income': '42019',
//         'age': '31'
//     },
//     {
//         'city': 'El Paso', 
//         'zip': '79936', 
//         'state': 'TX', 
//         'income': '54692',
//         'age': '31'
//     },
//     {
//         'city': 'Los Angeles', 
//         'zip': '90011', 
//         'state': 'CA', 
//         'income': '36954',
//         'age': '28'
//     },
//     {
//         'city': 'Norwalk', 
//         'zip': '90650', 
//         'state': 'CA', 
//         'income': '66453',
//         'age': '35'
//     }
// ]

//Updated app.js
//Task 1
const { MongoClient } = require("mongodb"); // Import MongoDB client

// Define MongoDB connection URL and database name
const url = "mongodb://127.0.0.1:27017"; 
const dbName = "statsdb";

// Create an instance of MongoClient
const client = new MongoClient(url);

async function createDatabase() {
  try {
    // The 'try' block is where we write code that may throw an error
    // Here we attempt to connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB server"); // If the connection is successful, this message will be shown

    // Create or access the database (MongoDB creates the database only when a collection is added)
    const db = client.db(dbName);
    console.log(`Database "${dbName}" created or accessed successfully`);


    
  } catch (error) {
    // The 'catch' block handles any error that occurs within the 'try' block
    // If there's an error (like MongoDB not running, or wrong connection URL), it will be caught here
    console.error("Error connecting to MongoDB:", error);
    
  } finally {
    // The 'finally' block always runs, regardless of whether the 'try' block succeeds or the 'catch' block handles an error
    // It is useful for cleanup actions (like closing the database connection here)
    await client.close();
    console.log("MongoDB connection closed");
  }
}

// Call the function to create the database
createDatabase();

//Task 2: Create collection called uscencus
async function insertData() {
    const { MongoClient } = require("mongodb");
    const url = "mongodb://127.0.0.1:27017";
    const dbName = "statsdb";
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("uscensus");
  
      const stats = [
        { city: "San Juan", zip: "00926", state: "PR", income: "34781", age: "44" },
        { city: "Corona", zip: "11368", state: "NY", income: "50797", age: "32" },
        { city: "Chicago", zip: "60629", state: "IL", income: "42019", age: "31" },
        { city: "El Paso", zip: "79936", state: "TX", income: "54692", age: "31" },
        { city: "Los Angeles", zip: "90011", state: "CA", income: "36954", age: "28" },
        { city: "Norwalk", zip: "90650", state: "CA", income: "66453", age: "35" }
      ];
  
      const result = await collection.insertMany(stats);
      console.log(`${result.insertedCount} records inserted into 'uscensus' collection`);
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      await client.close();
    }
  }
  
  insertData();

  //Task 3: Insert additional records and output a message
  async function insertAdditionalData() {
    const { MongoClient } = require("mongodb");
    const url = "mongodb://127.0.0.1:27017";
    const dbName = "statsdb";
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("uscensus");
  
      const newStats = [
        { city: "Pacoima", zip: "91331", state: "CA", income: "60360", age: "33" },
        { city: "Ketchikan", zip: "99950", state: "AK", income: "00000", age: "00" }
      ];
  
      const result = await collection.insertMany(newStats);
      console.log(`${result.insertedCount} new records inserted into 'uscensus' collection`);
    } catch (error) {
      console.error("Error inserting new data:", error);
    } finally {
      await client.close();
    }
  }
  
  insertAdditionalData();
  

  //Task 4 : Zip code 
  async function findZipForCorona() {
    const { MongoClient } = require("mongodb");
    const url = "mongodb://127.0.0.1:27017";
    const dbName = "statsdb";
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("uscensus");
  
      const result = await collection.findOne({ city: "Corona", state: "NY" });
      if (result) {
        console.log(`Zip code for Corona, NY is: ${result.zip}`);
      } else {
        console.log("City not found");
      }
    } catch (error) {
      console.error("Error finding zip code:", error);
    } finally {
      await client.close();
    }
  }
  
  findZipForCorona();
  