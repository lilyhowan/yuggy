import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardPage() {
  let { id } = useParams();
  let [card, setCard] = useState();
  const [loading, setLoading] = useState(true);

  const cardVendors = {
    cardmarket_price: "Cardmarket",
    tcgplayer_price: "TCGPlayer",
    ebay_price: "eBay",
    amazon_price: "Amazon",
    coolstuffinc_price: "CoolStuffInc"
  };

  const typeExceptions = {
    cyberse: "machine",
    wyrm: "reptile",
    "creator-god": "fairy",
    "sea serpent": "sea-serpent",
    "winged beast": "winged-beast"
  };

  useEffect(() => {
    fetch(`/api/card/${id}`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCard(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mx-auto  w-4/5">
      {loading ? (
        <div className="spinner-wrapper self-center">
          <Spinner />
        </div>
      ) : card.name ? (
        <div className="flex">
          <div id="img-wrapper" className="">
            <img src={card.card_images[0]["image_url"]} alt={card.name} />
          </div>
          <div id="info-wrapper" className="">
            <div className="flex justify-between items-center bg-base-200 m-2 mt-0 p-4 rounded-lg prose prose-h2:mb-0 max-w-full">
              <h2>{card.name}</h2>
              <p>{card.level}</p>
            </div>
            <div className="flex justify-between bg-base-200 m-2 p-4 rounded-lg">
              <p>
                {card.type} / ID: {id}
              </p>
              <div className="flex items-center">
                {card.attribute && (
                  <img
                    src={`/attributes/${card.attribute}.png`}
                    alt={card.attribute}
                    className="inline max-w-[20px] mr-2"
                  />
                )}
                <img
                  src={
                    card.race.toLowerCase() in typeExceptions
                      ? `/races/${typeExceptions[card.race.toLowerCase()]}.png`
                      : `/races/${card.race.toLowerCase()}.png`
                  }
                  alt={card.race}
                  className="inline"
                />
              </div>
            </div>
            {(card.atk >= 0 ||
              card.def >= 0 ||
              card.scale >= 0 ||
              card.linkval >= 0) && (
              <div className="flex gap-4 bg-base-200 m-2 p-4 rounded-lg">
                {card.atk >= 0 && <p>ATK/{card.atk}</p>}
                {card.def >= 0 && <p>DEF/{card.def}</p>}
                {card.scale >= 0 && <p>Scale: {card.scale}</p>}
                {card.linkval >= 0 && <p>LINK-{card.linkval}</p>}
              </div>
            )}
            <p className="flex bg-base-200 m-2 p-4 rounded-lg whitespace-pre-line">
              {card.desc}
            </p>
            {card.archetype && (
              <p className="flex bg-base-200 m-2 p-4 rounded-lg">
                <b>Archetype</b>: {card.archetype}
              </p>
            )}
          </div>
          <div
            id="price-wrapper"
            className="bg-base-200 m-2 mt-0 p-4 rounded-lg prose prose-h2:mb-0 prose-ul:list-none prose-ul:p-0 prose-li:p-0 max-w-full h-fit basis-1/5"
          >
            <h3>Card Prices</h3>
            <table>
              <tbody>
              {Object.keys(card.card_prices[0]).map((vendor) => (
                <tr key={vendor}>
                  <td><b>{cardVendors[vendor]}</b></td>
                  <td>
                    {vendor === "cardmarket_price"
                      ? "€" + card.card_prices[0][vendor]
                      : "$" + card.card_prices[0][vendor]}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "Card does not exist."
      )}
    </div>
  );
}

export default CardPage;
