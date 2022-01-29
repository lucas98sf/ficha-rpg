import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dice from "./Dice";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const randomDiceNumber = (diceSize) => Math.floor(Math.random() * diceSize + 1);

function RollDice({ type, finalResult }) {
    document
        .querySelectorAll(".numeroRolado")
        .forEach((elem) => (elem.style.fontSize = "25px"));
    const [result, setResult] = useState(randomDiceNumber(type));

    useEffect(() => {
        async function animateRolls() {
            for (let i = 0; i < 15; i++) {
                await timer(100);
                setResult(randomDiceNumber(type));
            }
        }
        animateRolls().then(() => setResult(finalResult));
    }, [finalResult, type]);

    return (
        <div className="rollDice">
            <div className="numeroRolado">{result}</div>
            <Dice size="150" type={type} />
        </div>
    );
}

export default function RollDices() {
    const [dices, setDices] = useState("");
    const rollDices = () => {
        if (!dices) return;
        const splittedDices = dices.split("+");
        const results = [];
        for (const dice of splittedDices) {
            const [quantity, type] = dice.split("d");
            for (let i = 0; i < quantity; i++) {
                let result = randomDiceNumber(type);
                results = [...results, { quantity, type, result }];
            }
        }
        renderDices(results);
    };

    let renderingDices = false;
    const renderDices = async (results) => {
        if (renderingDices) return;
        renderingDices = true;
        const container = document.getElementById("dicesModal");
        const totalResult = results.reduce((acc, cur) => acc + cur.result, 0);
        const dices = (
            <div className="containerMultiDices">
                {results.map(({ quantity, type, result }) =>
                    Array.of(quantity).map(() => (
                        <RollDice
                            key={`dice-${type}`}
                            type={type}
                            finalResult={result}
                        />
                    ))
                )}
                <center className="totalResult">{totalResult}</center>
            </div>
        );
        ReactDOM.render(dices, container);
        await timer(3100);
        ReactDOM.unmountComponentAtNode(container);
        renderingDices = false;
    };

    return (
        <div className="multidados">
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
