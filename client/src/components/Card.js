const Card = (props) => {
  // effect monsters that are also another monster type (e.g. synchro/effect) use the colour of the other type
  // pendulum monsters use a vertical gradient that fades from the other monster type's card color to spell type green

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

  return (
    <div
      className="Card flex flex-col p-4 gap-4 rounded-md"
      style={{
        background: `linear-gradient(180deg, ${
          TYPE_COLORS[getCardColor(props.type)]
        } 45%, #2B292C 45%)`
      }}
    >
      <img
        className="rounded container mx-auto"
        src={props.url}
        alt={props.name}
      />
      <div className="card-info">
        <p className="font-bold">{props.name}</p>
        <ul>
          <li>{props.type}</li>
          {props.atk && (
            <li>
              ATK: {props.atk} / DEF: {props.def}
            </li>
          )}
          <li>
            Owned: {props.owned} / Ran: {props.ran}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
