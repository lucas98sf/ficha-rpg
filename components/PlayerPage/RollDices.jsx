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
    const errorMessage = () =>
        alert("O formato correto é '2d6+3d8', por exemplo.");
    const rollDices = () => {
        if (!dices || !dices.includes("d")) return errorMessage();
        try {
            const splittedDices = dices.split("+");
            const results = [];
            for (const dice of splittedDices) {
                const [quantity, type] = dice.split("d");
                if (type % 2 !== 0)
                    return alert(
                        "Os dados devem ter uma quantidade par de faces."
                    );
                for (let i = 0; i < quantity; i++) {
                    let result = randomDiceNumber(type);
                    results = [...results, { quantity, type, result }];
                }
                if (results.length > 15)
                    return alert("Não é possível rolar mais de 15 dados.");
            }
            renderDices(results);
        } catch (err) {
            return errorMessage();
        }
    };

    let renderingDices = false;
    const renderDices = async (results) => {
        if (renderingDices) return;
        renderingDices = true;
        const container = document.getElementById("dicesModal");
        const totalResultValue = results.reduce(
            (acc, cur) => acc + cur.result,
            0
        );
        const Dices = () => {
            const [totalResult, setTotalResult] = useState(null);

            useEffect(() => {
                if (totalResult === null) {
                    timer(1500).then(() => setTotalResult(totalResultValue));
                }
            }, [totalResult]);

            return (
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
                    {totalResult && (
                        <div className="totalResult">Total: {totalResult}</div>
                    )}
                </div>
            );
        };
        ReactDOM.render(<Dices />, container);
        await timer(5000);
        ReactDOM.unmountComponentAtNode(container);
        renderingDices = false;
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
