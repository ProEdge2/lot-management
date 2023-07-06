const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.PROJECTS_NS,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
