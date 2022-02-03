import React, { useEffect, useState } from "react";
import Dice from "./Dice";
import FadeIn from "react-fade-in";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export default function RollTest({ nomePericia, pericia }) {
    const randomD20Number = () => Math.floor(Math.random() * 20 + 1);

    const [result, setResult] = useState(randomD20Number());
    const [resultText, setResultText] = useState(null);
    const [format, setFormat] = useState("gif");

    useEffect(() => {
        const finalResult = randomD20Number();

        async function animateRolls() {
            // for (let i = 0; i < 15; i++) {
            //     await timer(100);
            //     setResult(randomD20Number());
            // }
            await timer(2040);
            setFormat("png");
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
            <FadeIn className="numeroRolado" delay="2040">
                <div className="numeroRolado">{result}</div>
            </FadeIn>
            <FadeIn className="resultadoTexto" delay="300">
                {resultText && <div>{resultText}</div>}
            </FadeIn>
            <Dice size="192" type="20solo" format={format} reverse={false} />
        </div>
    );
}
