import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardPage() {
  let { id } = useParams();
  let [card, setCard] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
        setCard(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mx-auto w-4/5 flex flex-col">
      {loading ? (
        <div className="spinner-wrapper self-center">
          <Spinner />
        </div>
      ) : card.name ? (
        <div className="flex flex-col items-center md:flex-row md:items-start gap-2">
          {showModal && (
            <div
              id="img-modal"
              className="fixed w-full h-full left-0 top-0 bg-base-300/70 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img
                src={card.card_images[0]["image_url"]}
                alt={card.name}
                className="mx-auto mt-20"
              />
            </div>
          )}
          <div
            id="img-wrapper"
            className="m-2 mt-0 min-w-[200px] max-w-[300px] basis-1/4"
          >
            <img
              src={card.card_images[0]["image_url"]}
              alt={card.name}
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md"
            />
          </div>
          <div id="info-wrapper" className="basis-1/2 w-full">
            <div className="flex justify-between items-center bg-base-200 m-2 mt-0 p-4 rounded-lg prose prose-h2:mb-0 prose-h3:mb-0 max-w-full">
              <h2>{card.name}</h2>
              <h3>{card.level}</h3>
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
          <div id="extra-wrapper" className="basis-1/4">
            <div
              id="price-wrapper"
              className="bg-base-200 m-2 mt-0 p-4 rounded-lg prose prose-h2:mb-0 prose-td:p-1 max-w-full h-fit"
            >
              <h4>Card Prices</h4>
              <table>
                <tbody>
                  {Object.keys(card.card_prices[0]).map((vendor) => (
                    <tr key={vendor}>
                      <td>{cardVendors[vendor]}</td>
                      <td className="text-right">
                        {vendor === "cardmarket_price"
                          ? "€" + card.card_prices[0][vendor]
                          : "$" + card.card_prices[0][vendor]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              id="set-wrapper"
              className="bg-base-200 m-2 mt-0 p-4 rounded-lg prose prose-h2:mb-0 prose-td:p-1 max-w-full h-56 overflow-y-scroll"
            >
              <h4>Sets</h4>
              <table>
                <tbody>
                  {card.card_sets.map((set, i) => (
                    <tr key={i}>
                      <td>{set.set_name}</td>
                      <td className="text-right">{set.set_rarity_code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        "Card does not exist."
      )}
    </div>
  );
}

export default CardPage;
