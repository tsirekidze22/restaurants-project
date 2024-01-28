const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// MongoDB connection string
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
    return client.db();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

app.get("/api/restaurants", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const restaurantsCollection = db.collection("restaurants");

    // Use MongoDB query to find all restaurants
    const allRestaurants = await restaurantsCollection.find({}).toArray();

    res.json(allRestaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
