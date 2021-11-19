import { mudarValorAtributo } from "../utils";
import { RollD20 } from "../utils";

export default function Attributes({ Nome, Atributos }) {
    return (
        <div className="attributesFicha">
            {Object.entries(Atributos).map(([name, value]) => {
                return (
                    <div key={name} className="attributesGrid">
                        <button className="attributeNameFicha" onClick={()=> RollD20(name)}>{name}</button>
                        <div className="attributeButtonsFicha">
                            <button
                                className="attributeUp"
                                id={`${name}Up`}
                                onClick={() =>
                                    mudarValorAtributo(
                                        `${name}Up`,
                                        Nome,
                                        name,
                                        +1
                                    )
                                }
                            >
                                +
                            </button>
                            <div className="attributeValueFicha" id={`${name}`}>
                                {value}
                            </div>
                            <button
                                className="attributeDown"
                                id={`${name}Down`}
                                onClick={() =>
                                    mudarValorAtributo(
                                        `${name}Up`,
                                        Nome,
                                        name,
                                        -1
                                    )
                                }
                            >
                                -
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
