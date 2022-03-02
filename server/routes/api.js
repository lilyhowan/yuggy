const express = require("express");
const axios = require("axios");
const Card = require("../models/card");
const router = express.Router();

router.get("/archetypes", (req, res) => {
  return axios
    .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

router.put("/card/:id", (req, res) => {
  // get card from database by ID
  Card.findById(req.params.id).then((card) => {
    if (card) {
      // check if the card in the DB was last updated more than 30 days ago
      // if true, fetch the card by ID from the YGOPRODeck API and update any keys which differ
      if (new Date().getTime() - card.updatedAt.getTime() > 2592000000) {
        axios
          .get(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${req.params.id}`
          )
          .then((response) => {
            let fetched_card = response.data.data[0];

            for (key in fetched_card) {
              if (key != "id" && card[key] != fetched_card[key]) {
                card[key] = fetched_card[key];
              }
            }

            card.save(function (err, result) {
              if (err) {
                res.status(500).json({ error: "Error saving card." });
              }
              if (result) {
                res.json(result);
              }
            });
          });
      } else {
        // if the card has been updated less than 30 days ago, return
        res.json(card);
      }
    } else {
      // if the card doesn't exist, fetch from the YGOPRODeck API and create a new card
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${req.params.id}`
        )
        .then((response) => {
          let { id, ...body } = response.data.data[0];
          Card.create({ _id: id, ...body }).then((data) =>
            res.status(201).json(data)
          );
        })
        .catch(() => {
          res
            .status(404)
            .json({ error: `Card ${req.params.id} does not exist.` });
        });
    }
  });
});

module.exports = router;
