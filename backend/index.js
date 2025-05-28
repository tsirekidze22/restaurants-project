const express = require("express");
const connectToDatabase = require("./db");
require("dotenv").config();

const app = express();
const port = 3001;
const cors = require("cors");

app.use(
  cors({
    origin: ["https://yourculinarycompass.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/api/restaurants", async (req, res) => {
  try {
    console.log("🔍 Incoming request to /api/restaurants");

    const db = await connectToDatabase();
    console.log("✅ Connected to database");

    const restaurantsCollection = db.collection("restaurants");

    const searchTerm = req.query.searchTerm;
    let query = {};

    if (searchTerm) {
      query = { name: { $regex: `.*${searchTerm}.*`, $options: "i" } };
    }

    const filteredRestaurants = await restaurantsCollection
      .find(query)
      .toArray();

    console.log("✅ Fetched restaurants:", filteredRestaurants);
    res.json(filteredRestaurants);
  } catch (error) {
    console.error("❌ Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
