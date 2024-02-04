const express = require("express");
const wordData = require("./utils/wordData");

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint for looking up a word in WordNet
app.get("/word/:word", (req, res) => {
  wordData.lookupWord(req, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
