// userOperations.js
const connectToDatabase = require("./db");

async function fetchUsers() {
  try {
    const db = await connectToDatabase();
    const resCollection = db.collection("restaurants");

    const allRes = await resCollection.find({}).toArray();
    return allRes;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
}

module.exports = { fetchUsers };
