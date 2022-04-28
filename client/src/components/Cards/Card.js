import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Card(props) {
  const [loading, setLoading] = useState(true);

  const TYPE_COLORS = {
    NOT_FOUND: "#FFFFFF",
    orange: "#FF8B53",
    yellow: "#FDE68A",
    green: "#1D9E74",
    blue: "#01AAF5",
    lightBlue: "#9DB5CC",
    darkBlue: "#00008B",
    violet: "#A086B7",
    purple: "#BC5A84",
    white: "#CCCCCC",
    gray: "#C0C0C0",
    black: "#121212"
  };

  const getCardColor = (type) => {
    if (type.includes("Pendulum") || type.includes("Spell")) {
      return "green";
    } else if (type.includes("Normal")) {
      return "yellow";
    } else if (type.includes("Trap")) {
      return "purple";
    } else if (type.includes("Fusion")) {
      return "violet";
    } else if (type.includes("Link")) {
      return "darkBlue";
    } else if (type.includes("Ritual")) {
      return "lightBlue";
    } else if (type.includes("Synchro")) {
      return "white";
    } else if (type.includes("XYZ")) {
      return "black";
    } else if (type.includes("Skill")) {
      return "blue";
    } else if (
      type.includes("Effect") ||
      type.includes("Gemini") ||
      type.includes("Toon") ||
      type.includes("Spirit") ||
      type.includes("Tuner")
    ) {
      return "orange";
    } else {
      return "NOT_FOUND";
    }
  };

  return (
    <motion.div
      variants={props.variants}
      initial="hidden"
      animate="visible"
      exit="visible"
      custom={props.custom}
      className="Card flex flex-col p-4 gap-4 rounded-md drop-shadow-md"
      style={{
        display: loading ? "none" : "block",
        background: `linear-gradient(180deg, ${
          TYPE_COLORS[getCardColor(props.type)]
        } 45%, #262626 45%)`
      }}
    >
      <a href={`/card/${props.id}`}>
        <img
          src={props.url}
          alt={props.name}
          className="rounded container mx-auto mb-2"
          onLoad={() => setLoading(false)}
        />
        <div className="card-info">
          <p className="font-bold">{props.name}</p>
          <ul>
            <li>{props.type}</li>
          </ul>
        </div>
      </a>
    </motion.div>
  );
}

export default Card;
