const express = require("express");
const app = express();
const reportDAO = require("./dao/reportDAO.js");

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

const port = 3000; // Choose the port you want your server to listen on
app.listen(port, async () => {
  await reportDAO.addUser();
  console.log(`Server is running on port ${port}`);
});
