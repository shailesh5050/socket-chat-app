const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { chats } = require("./data/data");
dotenv.config();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
