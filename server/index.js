require('dotenv').config();
var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

var CONNECTION_STRING = process.env.MONGODB_URI; // Ensure this is set correctly
var DATABASE = 'ASTIJournalism';
var database;

app.listen(5050, async () => {
  console.log("Server is running on port 5050...");
  try {
    const client = await MongoClient.connect(CONNECTION_STRING);
    database = client.db(DATABASE);
    console.log("Successful connection to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
