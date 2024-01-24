// db.js
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://tsirekidze022:tsirekidze99@cluster0.fulnsyr.mongodb.net/firstDb?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Log the database name (optional)
    const databaseName = client.db().databaseName;
    console.log(`Connected to database: ${databaseName}`);

    return client.db();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
