import {
    mudarValorStat,
    mudarValorSimples,
    tooltipMouse,
    tooltipMouseOut,
    tooltipMouseFixo,
} from "../utils";
import Image from "next/image";
let nomeImagem = "Imagem1";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Stats({ Nome, Imagens, Raça, Status, Lins, Exp }) {
    const [qualFoto, setFoto] = useState(nomeImagem);
    function changeImg(numeroFoto) {
        nomeImagem = "Imagem" + numeroFoto;
        setFoto(nomeImagem);
        console.log(nomeImagem);
    }
    return (
        <div className="centro">
            <div className="playerNameFicha">{Nome}</div>
            {/* <img className="playerImgFicha" src={Imagem}></img> */}
            <div
                id="tooltipImages"
                onMouseMove={(event) => tooltipMouseFixo(event, "Images")}
                onMouseOut={() => tooltipMouseOut("Images")}
            >
                {Object.entries(Imagens).map(([name], i)=>{
                    return(
                        <button onClick={()=>changeImg(i+1)} className="changeImgButton" key={name}>{i+1}</button>
                    );
                })}
            </div>
            <div className="playerImgFichaGrid">
                <Image
                    alt="Player profile picture"
                    className="playerImgFicha"
                    width={270}
                    height={270}
                    unoptimized={true}
                    src={Imagens[qualFoto]}
                    onMouseMove={(event) => tooltipMouseFixo(event, "Images")}
                    onMouseOut={() => tooltipMouseOut("Images")}
                ></Image>
            </div>

            {/* <TextTooltips /> */}
            {Object.entries(Status).map(([type, stat]) => {
                const values = Object.entries(stat).map(([name, value]) => {
                    return (
                        <div key={name} className={`${name}`}>
                            <input
                                type="text"
                                className={`${name}Input`}
                                id={name}
                                maxLength="3"
                                defaultValue={value}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onKeyUp={() => mudarValorStat(Nome, type, name)}
                            />
                        </div>
                    );
                });
                return (
                    <div key={type} className={`${type}`}>
                        <div
                            className="titleStat"
                            onMouseMove={(event) => tooltipMouse(event, type)}
                            onMouseOut={() => tooltipMouseOut(type)}
                        >
                            {type}
                        </div>
                        <div className="barraStat">/</div>
                        {values}
                    </div>
                );
            })}
            <div
                className="lins"
                onMouseMove={(event) => tooltipMouse(event, "Lins")}
                onMouseOut={() => tooltipMouseOut("Lins")}
            >
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
            <div
                className="EXP"
                onMouseMove={(event) => tooltipMouse(event, "Exp")}
                onMouseOut={() => tooltipMouseOut("Exp")}
            >
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
