const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

const CONNECTION_STRING = "mongodb+srv://Journalism:Journalism@astijournalism.scqs3.mongodb.net/?retryWrites=true&w=majority&appName=ASTIJournalism"
const DATABASE = "ASTIJournalism";
let database;

// Connect to MongoDB and start the server
MongoClient.connect(CONNECTION_STRING)
  .then((client) => {
    database = client.db(DATABASE);
    console.log("Successful connection to the database");

    // Start listening only after the database connection is established
    app.listen(5050, () => {
      console.log("Server is running on port 5050...");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the ASTIJournalism API");
});

// GET /articles route to fetch all articles
app.get("/articles", async (req, res) => {
  try {
    const articlesCollection = database.collection("articles");
    const articles = await articlesCollection.find().toArray();
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ message: "Error fetching articles", error: error.message });
  }
});

// POST /articles route to add articles
app.post("/articles", async (req, res) => {
  try {
    const articlesCollection = database.collection("articles");
    const articles = req.body;

    if (Array.isArray(articles)) {
      const result = await articlesCollection.insertMany(articles);
      res.status(201).send({ message: "Articles added successfully", result });
    } else {
      const result = await articlesCollection.insertOne(articles);
      res.status(201).send({ message: "Article added successfully", result });
    }
  } catch (error) {
    console.error("Error adding articles:", error); // Log the error details
    res.status(500).send({ message: "Error adding articles", error: error.message });
  }
});

// PATCH /articles/:id/like route to like an article
app.patch("/articles/:id/like", async (req, res) => {
  try {
    const articleId = req.params.id; 
    console.log("Attempting to like article with ID:", articleId);

    const articlesCollection = database.collection("articles");
    
    const result = await articlesCollection.updateOne(
      { _id: new ObjectId(articleId) }, // Use new ObjectId here
      { $inc: { likes: 1 } }
    );

    console.log("Update result:", result);

    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "Article not found" });
    }

    const updatedArticle = await articlesCollection.findOne({
      _id: new ObjectId(articleId), // Use new ObjectId here
    });

    res.status(200).send({
      message: "Like added successfully",
      likes: updatedArticle.likes,
    });
  } catch (error) {
    console.error("Error adding like:", error);
    res.status(500).send({ message: "Error adding like", error: error.message });
  }
});
