const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: ["https://res-os-test-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
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

    const databaseName = client.db().databaseName;
    console.log(`Connected to database: ${databaseName}`);

    return client.db();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
