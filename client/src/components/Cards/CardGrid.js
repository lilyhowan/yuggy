import React from "react";
import Card from "./Card";
import { AnimatePresence } from "framer-motion";

function CardGrid(props) {
  const itemVariants = {
    hidden: i => ({
      opacity: 0,
      transition: {
        delay: i * 0.1
      }
    }),
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.1 // custom prop used to stagger delay
      }
    })
  };

  return (
    <AnimatePresence exitBeforeEnter>
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] xl:grid-cols-[repeat(auto-fill,_240px)] gap-5 justify-center text-left" key="card-grid">
        {props.cards.map((card, i) => (
          <Card
            id={card.id}
            name={card.name}
            type={card.type}
            url={card.card_images[0].image_url}
            atk={card.atk}
            def={card.def}
            key={card.name}
            variants={itemVariants}
            custom={i}
          />
        ))}
    </div>
    </AnimatePresence>
  );
}

export default CardGrid;
