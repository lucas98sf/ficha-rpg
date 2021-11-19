import { mudarValorSimples } from "../utils";
import { mudarValorStat } from "../utils";

export default function Stats({ Nome, Imagem, Raça, Status, Lins, Exp }) {
    return (
        <div className="centro">
            <div className="playerNameFicha">{Nome}</div>
            <img className="playerImgFicha" src={Imagem}></img>
            <div className="playerHealthFicha">
                PV
                <div className="vidaBorda">
                    <input
                        type="text"
                        className="vidaAtual"
                        id={Object.keys(Status)[0]}
                        maxLength="3"
                        defaultValue={Status["Vida Atual"]}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[0])}
                    />
                    /
                    <input
                        type="text"
                        className="vidaMaxima"
                        id={Object.keys(Status)[1]}
                        maxLength="3"
                        defaultValue={Status["Vida Máxima"]}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[1])}
                    />
                </div>
            </div>
            <div className="playerSanityFicha">
                PS
                <div className="sanidadeBorda">
                    <input
                            type="text"
                            className="sanidadeAtual"
                            id={Object.keys(Status)[2]}
                            maxLength="3"
                            defaultValue={Status["Sanidade Atual"]}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[2])}
                    />
                    /
                    <input
                            type="text"
                            className="sanidadeMaxima"
                            id={Object.keys(Status)[3]}
                            maxLength="3"
                            defaultValue={Status["Sanidade Máxima"]}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[3])}
                        />
                </div>
            </div>
            <div className="playerMagicFicha">
                PM
                <div className="magiaBorda"> 
                    <input
                            type="text"
                            className="magiaAtual"
                            id={Object.keys(Status)[4]}
                            maxLength="3"
                            defaultValue={Status["Magia Atual"]}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[4])}
                    />
                    /
                    <input
                            type="text"
                            className="magiaMaxima"
                            id={Object.keys(Status)[5]}
                            maxLength="3"
                            defaultValue={Status["Magia Máxima"]}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            onKeyUp={() => mudarValorStat(Nome, Object.keys(Status)[5])}
                        />
                </div>
            </div>
            <div className="lins">
                Lins
                <input
                    type="text"
                    id="Lins"
                    maxLength="5"
                    defaultValue={Lins}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onKeyUp={() => mudarValorSimples(Nome, "Lins")}
                />
            </div>
            <div className="EXP">
                Exp
                <input
                    type="text"
                    id="Exp"
                    maxLength="5"
                    defaultValue={Exp}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onKeyUp={() => mudarValorSimples(Nome, "Exp")}
                />
            </div>
        </div>
    );
}
