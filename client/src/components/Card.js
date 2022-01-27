const Card = (props) => {
    // effect monsters that are also another monster type (e.g. synchro/effect) use the colour of the other type
    // pendulum monsters use a vertical gradient that fades from the other monster type's card color to spell type green

    const TYPE_COLORS = {
        "Effect Monster": "#FF8B53",
        "Normal Monster" : "#FDE68A",
        "Spell Card": "#1D9E74",
        "Pendulum Effect Monster": "#1D9E74",
        "Ritual Effect Monster": "#9DB5CC",
        "Link Monster": "#00008B",
        "Fusion Monster": "#A086B7",
        "Trap Card": "#BC5A84",
        "Synchro Monster": "#CCCCCC",
        "Token Monster": "#C0C0C0",
        "XYZ Monster": "#000000"
    }

    const COLORS = {
        "orange": "#FF8B53",
        "yellow": "#FDE68A",
        "green": "#1D9E74",
        "lightBlue": "#9DB5CC",
        "darkBlue": "#00008B",
        "violet": "#A086B7",
        "purple": "#BC5A84",
        "white": "#CCCCCC",
        "gray": "#C0C0C0",
        "black": "#000000",
    }

    const TYPES = {
        "Effect Monster": "orange",
        "Flip Effect Monster": "",
        "Flip Tuner Effect Monster": "",
        "Gemini Monster": "",
        "Normal Monster": "yellow",
        "Normal Tuner Monster": "",
        "Pendulum Effect Monster": "",
        "Pendulum Flip Effect Monster": "",
        "Pendulum Normal Monster": "",
        "Pendulum Tuner Effect Monster": "",
        "Ritual Effect Monster": "",
        "Ritual Monster": "",
        "Skill Card": "",
        "Spell Card": "green",
        "Spirit Monster": "",
        "Toon Monster": "orange",
        "Trap Card": "purple",
        "Tuner Monster": "",
        "Union Effect Monster": "",
        "Fusion Monster": "violet",
        "Link Monster": "darkBlue",
        "Pendulum Effect Fusion Monster": "",
        "Synchro Monster": "white",
        "Synchro Pendulum Effect Monster": "",
        "Synchro Tuner Monster": "",
        "XYZ Monster": "",
        "XYZ Pendulum Effect Monster": "",
    }

    return (
        <div className="Card flex flex-col items-start max-w-xs p-4 gap-4 rounded-md" style={{ background: `linear-gradient(180deg, ${TYPE_COLORS[props.type]} 45%, #2B292C 45%)` }}>
            <img className="rounded container mx-auto" src={props.url} alt={props.name} />
            <div className="card-info text-left">
                <p className="font-bold">{props.name}</p>
                <ul>
                    <li>{props.type}</li>
                    {props.atk && <li>ATK: {props.atk} / DEF: {props.def}</li>}
                    <li>Owned: {props.owned} / Ran: {props.ran}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
