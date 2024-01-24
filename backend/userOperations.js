// userOperations.js
const connectToDatabase = require("./db");

async function fetchUsers() {
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("restaurants"); // Update collection name here

    // Use MongoDB query to find all users
    const allUsers = await usersCollection.find({}).toArray();
    console.log(allUsers);
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

module.exports = { fetchUsers };
