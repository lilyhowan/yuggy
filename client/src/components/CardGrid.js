import React from "react";
import Card from "./Card";

const CardGrid = (props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_auto))] gap-5 text-left">
      {props.cards.map((card) => (
        <Card
          name={card.name}
          type={card.type}
          url={card.card_images[0].image_url}
          atk={card.atk}
          def={card.def}
          key={card.name}
        />
      ))}
    </div>
  );
};

export default CardGrid;
