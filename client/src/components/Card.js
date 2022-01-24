const Card = (props) => {
    // effect monsters that are also another monster type (e.g. synchro/effect) use the colour of the other type
    // pendulum monsters use a vertical gradient that fades from the other monster type's card color to spell type green

    const TYPE_COLORS = {
        effect: "#FF8B53",
        normal: "#FDE68A",
        spell: "#1D9E74",
        ritual: "#9DB5CC",
        link: "#00008B",
        fusion: "#A086B7",
        trap: "#BC5A84",
        synchro: "#CCCCCC",
        token: "#C0C0C0",
        xyz: "#000000"
    }

    return (
        <div className="Card flex flex-col w-[fit-content] p-5 gap-4 bg-black text-white rounded-md" style={{ background: `linear-gradient(180deg, ${TYPE_COLORS.xyz} 45%, #2B292C 45%)` }}>
            <img className="max-w-[300px] m-auto rounded" src={props.url} alt="card name" />
            <div className="card-info text-left">
                <p className="font-bold">{props.name}</p>
                <ul>
                    <li>{props.type}</li>
                    <li>Owned: {props.owned} / Ran: {props.ran}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
