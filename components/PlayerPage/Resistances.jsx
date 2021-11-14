export default function Resistances({ Resistências }) {
    return (
        <div className="resistances">
            <div className="titleResistances">Resistências</div>
            {Object.entries(Resistências).map(([name, value]) => {
                return (
                    <div key={name} className="resistancesGrid">
                        <div className="resistanceName">{name}</div>
                        <div className="resistanceValue">{value}</div>
                    </div>
                );
            })}
        </div>
    );
}
