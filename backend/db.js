const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");

const uri =
  "mongodb+srv://Developer22:Developer.12345@cluster0.fulnsyr.mongodb.net/firstDb?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: ["https://yourculinarycompass.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const databaseName = client.db().databaseName;
    console.log(`Connected to database: ${databaseName}`);

    return client.db();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
