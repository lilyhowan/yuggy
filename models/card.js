const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    _id: Number,
    name: {
      type: String,
      required: true
    },
    type: String,
    desc: String,
    atk: Number,
    def: Number,
    level: Number,
    race: String,
    attribute: String,
    archetype: String,
    scale: Number,
    linkval: Number,
    linkmarkers: {
      type: [String],
      default: undefined
    },
    card_sets: {
      type: [
        {
          set_name: {
            type: String,
            required: true
          },
          set_code: String,
          set_rarity: String,
          set_rarity_code: String,
          set_price: String
        }
      ],
      default: undefined,
      _id: false
    },
    card_images: {
      type: [
        {
          id: {
            type: Number,
            required: true
          },
          image_url: String,
          image_url_small: String
        }
      ],
      default: undefined,
      _id: false
    },
    card_prices: {
      type: [
        {
          cardmarket_price: String,
          tcgplayer_price: String,
          ebay_price: String,
          amazon_price: String,
          coolstuffinc_price: String
        }
      ],
      default: undefined,
      _id: false
    },
    banlist: {
      type: [
        {
          ban_tcg: String,
          ban_ocg: String,
          ban_goat: String
        }
      ],
      default: undefined
    }
  },
  { timestamps: true }
);

const Card = mongoose.model("card", CardSchema);

module.exports = Card;
