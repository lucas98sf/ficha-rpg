import React, { useEffect, useState } from "react";
import { renderDices } from "../utils";
import Dice from "./Dice";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const randomDiceNumber = (diceSize) => Math.floor(Math.random() * diceSize + 1);

export function RollDice({ type, finalResult }) {
    document
        .querySelectorAll(".numeroRolado")
        .forEach((elem) => (elem.style.fontSize = "25px"));
    const [result, setResult] = useState("");
    const [format, setFormat] = useState("gif");

    useEffect(() => {
        timer(1980)
            .then(() => setFormat("png"))
            .then(() => setResult(finalResult));
    }, [finalResult, type]);

    return (
        <div className="rollDice">
            <Dice
                size="150"
                type={type}
                format={format}
                reverse={randomDiceNumber(20) % 2 === 0}
            />
            <div className="numeroRolado">{result}</div>
        </div>
    );
}

export default function RollDices() {
    const [dices, setDices] = useState("");
    const errorMessage = () =>
        alert("O formato correto é '2d6+3d8', por exemplo.");
    const validTypes = [4, 6, 8, 10, 12, 20];
    const rollDices = () => {
        if (!dices || !dices.includes("d")) return errorMessage();
        try {
            const splittedDices = dices.split("+");
            const results = [];
            for (const dice of splittedDices) {
                const [quantity, type] = dice.split("d");
                if (!validTypes.includes(Number(type)))
                    return alert("este dado n existe pare imediatamente");
                for (let i = 0; i < quantity; i++) {
                    let result = randomDiceNumber(type);
                    results = [...results, { quantity, type, result }];
                }
                if (results.length > 16)
                    return alert("Não é possível rolar mais de 16 dados.");
            }
            renderDices(results);
        } catch (err) {
            return errorMessage();
        }
    };

    return (
        <div className="multiDados">
            <input
                type="text"
                id="inputMultiDados"
                value={dices}
                onChange={(e) => setDices(e.target.value)}
            />
            <button
                className="botaoMultiDados"
                onClick={() => {
                    rollDices();
                }}
            >
                Rolar
            </button>
        </div>
    );
}
