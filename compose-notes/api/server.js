const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const mongoUrl = process.env.MONGO_URL || "mongodb://mongo:27017";
const client = new MongoClient(mongoUrl);

app.post("/notes", async (req, res) => {
  const note = req.body;
  await client.connect();
  const db = client.db("notesdb");
  await db.collection("notes").insertOne(note);
  res.json({ status: "saved", note });
});

app.get("/notes", async (req, res) => {
  await client.connect();
  const db = client.db("notesdb");
  const notes = await db.collection("notes").find().toArray();
  res.json(notes);
});

app.listen(3000, () => console.log("API running on port 3000"));
