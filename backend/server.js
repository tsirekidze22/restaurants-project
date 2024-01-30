const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./db"); // Import the connectToDatabase function
require("dotenv").config();

const app = express();
const port = 3001;

app.use(
  cors({
    origin: ["https://res-os-test-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/api/restaurants", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const restaurantsCollection = db.collection("restaurants");

    const searchTerm = req.query.searchTerm;
    let query = {};

    if (searchTerm) {
      query = { name: { $regex: `.*${searchTerm}.*`, $options: "i" } };
    }

    const filteredRestaurants = await restaurantsCollection
      .find(query)
      .toArray();

    res.json(filteredRestaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
