import db from "./db.js";
import mongoose from "mongoose";

// Use the `db` connection object for database operations
// Example: Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Example: Create a new user document
const newUser = new User({
  name: "John Doe",
  email: "john@example.com",
});

export default class reportDAO {
  static async addUser() {
    newUser
      .save()
      .then((result) => {
        console.log("New user saved:", result);
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });
  }
}
