import { getValueById, getTextById, updatePlayer } from "../utils";

async function mudarValorPericia(
    botaoId,
    nomePlayer,
    classePericia,
    pericia,
    update
) {
    const botao = document.getElementById(botaoId);
    botao.disabled = true;
    const valor = Number(getTextById(pericia)) + Number(update);
    if (valor >= 1 && valor <= 19) {
        await updatePlayer(nomePlayer, classePericia, pericia, valor);
        document.getElementById(pericia).innerText = valor;
    } else alert("chega mano");
    botao.disabled = false;
}

export default function Pericias({ Nome, Perícias }) {
    return (
        <div className="pericias">
            {Object.entries(Perícias).map(([type, pericias]) => {
                const values = Object.entries(pericias).map(([name, value]) => {
                    return (
                        <div key={name} className="periciaNameValue">
                            <button
                                className="periciaName"
                                id={`${name}Button`}
                            >
                                {name}
                            </button>
                            <div className="buttonsGroup" id={`${name}Buttons`}>
                                <button
                                    className="up"
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
                                <button className="periciaValue" id={`${name}`}>
                                    {value}
                                </button>
                                <button
                                    className="down"
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
                });
                return (
                    <div key={type} className="periciaType" id={`${type}`}>
                        {type}
                        <br />
                        {values}
                    </div>
                );
            })}
        </div>
    );
}
