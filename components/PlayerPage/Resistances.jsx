import { mudarValorResistencia } from "../utils";

export default function Resistances({Nome, Resistências }) {
    return (
        <div className="resistances">
            <div className="titleResistances">Resistências</div>
            {Object.entries(Resistências).map(([name, value]) => {
                return (
                    <div key={name} className="resistancesGrid">
                        <div className="resistanceName">{name}</div>
                        <button className="resistanceUp" id={`${name}Up`} onClick={() => mudarValorResistencia(`${name}Up`, Nome, name, +1)}>+</button>
                        <div className="resistanceValue" id={`${name}`}>{value}</div>
                        <button className="resistanceDown" id={`${name}Down`} onClick={() => mudarValorResistencia(`${name}Down`, Nome, name, -1)}>-</button>
                    </div>
                );
            })}
        </div>
    );
}
