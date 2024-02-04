const WordNet = require("node-wordnet");
const wordnet = new WordNet();

exports.lookupWord = (req, res) => {
  const { word } = req.params;

  wordnet.lookup(word, (err, definitions) => {
    if (err) {
      console.error(`Error looking up '${word}' in WordNet:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const result = definitions.map((definition, index) => ({
        id: index + 1,
        gloss: definition.gloss,
      }));
      res.json({ word, definitions: result });
    }
  });
};
