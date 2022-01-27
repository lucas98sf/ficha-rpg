import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dice from "./Dice";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const randomDiceNumber = (diceSize) => Math.floor(Math.random() * diceSize + 1);

function RollDice({ size, finalresult }) {
    const [result, setResult] = useState(randomDiceNumber(size));

    useEffect(() => {
        async function animateRolls() {
            for (let i = 0; i < 15; i++) {
                await timer(100);
                setResult(randomDiceNumber(size));
            }
            setResult(finalresult);
        }
        animateRolls();
    }, [finalresult, size]);
    // o size ainda está fixo como 20, fazer as imagens e depois colocar como variável
    return (
        <div className="rollDice">
            <div className="numeroRolado">{result}</div>
            <Dice size="20" />
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
            const [quantity, size] = dice.split("d");
            let result = 0;
            for (let i = 0; i < quantity; i++) {
                result += randomDiceNumber(size);
            }
            results = [...results, { quantity, size, result }];
        }
        renderDices(results);
    };

    let renderingDices = false;
    const renderDices = async (results) => {
        if (renderingDices) return;
        renderingDices = true;
        const container = document.getElementById("dicesModal");
        const dices = (
            <div className="containerMultiDices">
                {results.map(({ quantity, size, result }) =>
                    Array.of(quantity).map((_, i) => (
                        <RollDice
                            key={`dice-${i}-${size}`}
                            size={size}
                            finalresult={result}
                        />
                    ))
                )}
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
