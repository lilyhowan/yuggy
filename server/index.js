const axios = require("axios");
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/archetypes", (req, res) => {
  return axios
    .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
