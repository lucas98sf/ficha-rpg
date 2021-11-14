export default function Attributes({ Nome, Atributos }) {
    return (
        <div className="attributesFicha">
            {Object.entries(Atributos).map(([name, value]) => {
                return (
                    <div key={name} className="attributesGrid">
                        <button className="attributeNameFicha">{name}</button>
                        <div className="attributeButtonsFicha">
                            <button
                                className="attributeUp"
                                id={`${name}Up`}
                                onClick={() =>
                                    mudarValorPericia(
                                        `${name}Up`,
                                        Nome,
                                        type,
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
                                    mudarValorPericia(
                                        `${name}Up`,
                                        Nome,
                                        type,
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
