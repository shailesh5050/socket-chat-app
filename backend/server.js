const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
