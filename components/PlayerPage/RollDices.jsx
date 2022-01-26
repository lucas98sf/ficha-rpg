import React, { useEffect, useState } from "react";
import Image from "next/image";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export default function DicesModal({ nomePericia, pericia }) {
    const randomD20Number = () => Math.floor(Math.random() * 20 + 1);

    const [result, setResult] = useState(randomD20Number());
    const [resultText, setResultText] = useState(null);

    useEffect(() => {
        const finalResult = randomD20Number();

        async function animateRolls() {
            for (let i = 0; i < 15; i++) {
                await timer(100);
                setResult(randomD20Number());
            }
            setResult(finalResult);
        }

        animateRolls().then(() => {
            const getResultText = (resultValue) => {
                const normal = [
                    20, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
                    2, 1,
                ];
                const bom = [
                    0, 20, 20, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13,
                    12, 12, 11, 11,
                ];
                const extremo = [
                    0, 0, 0, 20, 20, 20, 19, 19, 19, 19, 18, 18, 18, 18, 17, 17,
                    17, 17, 16,
                ];

                let text;
                if (resultValue == 1) {
                    text = "Desastre!";
                } else if (resultValue < normal[pericia - 1]) {
                    text = "Falha";
                } else if (resultValue < bom[pericia - 1]) {
                    text = "Normal";
                } else if (resultValue < extremo[pericia - 1]) {
                    text = "Bom";
                } else {
                    text = "Extremo";
                }
                return text;
            };
            setResultText(getResultText(finalResult));
        });
    }, [pericia]);

    return (
        <div className="containerD20">
            <div className="nomePericia">{nomePericia}</div>
            <div className="numeroRolado">{result}</div>
            <div className="dadoImg">
                <Image
                    src="/images/D20.png"
                    alt="D20"
                    width="200vw"
                    height="200vw"
                />
            </div>
            {resultText && <div className="resultadoTexto">{resultText}</div>}
        </div>
    );
}

export function RollDices() {
    const inputMultiDados = getValueById("inputMultiDados");
    const textoEscreverDados = document.getElementById("textTipoDado");
    const textoResultDado = document.getElementById("textResultDado");
    const total = document.getElementById("totalDados");

    let rolandoDado = false;

    const splitDados = inputMultiDados.split("+");
    const dados = splitDados.map((conjuntoDados) => conjuntoDados.split("d"));

    const results = {};

    textoEscreverDados.innerText = "";
    textoResultDado.innerText = "";
    total.innerText = "";
    for (let [quant, dado] of dados) {
        let resultsDado = [];
        // for (let i = 0; i < quant; i++) {
        //     const result = Math.floor(Math.random() * dado + 1);
        //     resultsDado.push(result);
        // }
        const tipoDado = "D" + dado;
        results[tipoDado] = resultsDado;
    }

    for (let result of Object.entries(results)) {
        const tipoDado = result[0];
        const resultadosDados = result[1];
        const sum = result[1].reduce(add, 0);
        function add(accumulator, a) {
            return accumulator + a;
        }

        total.innerText += sum + "=" + tipoDado + "/";

        for (let resultadoDado of resultadosDados) {
            escreverDados(tipoDado, resultadoDado);
        }
    }

    function escreverDados(dado, resultado) {
        textoEscreverDados.innerText += dado + "/";
        textoResultDado.innerText += resultado + "/";
    }

    return (
        <div className="multidados">
            <input type="text" className="" id="inputMultiDados" />
            {/* <div id="textTipoDado"></div>
            <div id="textResultDado"></div>
            <div id="totalDados"></div> */}
            <button
                className="botaoMultiDados"
                onClick={() => rolarMultiDados()}
            >
                Rolar
            </button>
        </div>
    );
}
