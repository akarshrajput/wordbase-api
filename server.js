const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const wordData = require("./utils/wordData");

const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());

app.use(express.json());

// Endpoint for looking up a word in WordNet
app.get("/word/:word", (req, res) => {
  wordData.lookupWord(req, res);
});

// Handle unknown routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: `Can't find ${req.originalUrl} on this server!`,
    by: "Akarsh Rajput",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    by: "Akarsh Rajput",
  });
});

const port = process.env.PORT || 3000; // Use 3000 as a default if PORT is not defined
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
