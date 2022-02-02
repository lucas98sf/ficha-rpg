import React, { useEffect, useState } from "react";
import { renderDices } from "../utils";
import Dice from "./Dice";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const randomDiceNumber = (diceSize) => Math.floor(Math.random() * diceSize + 1);
let reverse;

export function RollDice({ type, finalResult }) {
    document
        .querySelectorAll(".numeroRolado")
        .forEach((elem) => (elem.style.fontSize = "25px"));
    const [result, setResult] = useState("");
    const [format, setFormat] = useState("gif");
    let end = "";
    useEffect(() => {
        async function changeToImg() {
            await timer(2400);
            end = "png";
        }
        changeToImg().then(() => setFormat(end));
    }, [end]);

    useEffect(() => {
        async function animateRolls() {
            await timer(2400);
        }
        animateRolls().then(() => setResult(finalResult));
    }, [finalResult, type]);


    let numberReverse = randomDiceNumber(20);
    if (numberReverse % 2 == 0) {
        reverse = false;
    } else {
        reverse = true;
    }
    console.log(reverse);

    return (
        <div className="rollDice">
            <Dice size="150" type={type} format={format} reverse={reverse} />
            <div className="numeroRolado">{result}</div>
        </div>
    );
}

export default function RollDices() {
    const [dices, setDices] = useState("");
    const errorMessage = () =>
        alert("O formato correto é '2d6+3d8', por exemplo.");
    const rollDices = () => {
        if (!dices || !dices.includes("d")) return errorMessage();
        try {
            const splittedDices = dices.split("+");
            const results = [];
            for (const dice of splittedDices) {
                const [quantity, type] = dice.split("d");
                if (
                    type != 4 &&
                    type != 6 &&
                    type != 8 &&
                    type != 10 &&
                    type != 12 &&
                    type != 20
                )
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
