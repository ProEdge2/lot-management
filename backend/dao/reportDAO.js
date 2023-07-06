const db = require("../database.js");
const mongoose = require("mongoose");

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

class reportDAO {
  static async addUser() {
    console.log(newUser.name);
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
module.exports = reportDAO;
