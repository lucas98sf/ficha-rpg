import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dice from "./Dice";

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const randomDiceNumber = (diceSize) => Math.floor(Math.random() * diceSize + 1);

function RollDice({ type, finalresult, i }) {
    var textNumero = document.getElementsByClassName("numeroRolado");
    // console.log(textNumero);
    
    for (let i = 0; i < textNumero.length; i++) {
        textNumero[i].style.fontSize = `${25}px`;
    }
    const [result, setResult] = useState(randomDiceNumber(type));
    // console.log(i);
    useEffect(() => {
        async function animateRolls() {
            for (let i = 0; i < 15; i++) {
                await timer(100);
                setResult(randomDiceNumber(type));
            }
            setResult(finalresult);
        }
        animateRolls();
    }, [finalresult, type]);
    // o type ainda está fixo como 20, fazer as imagens e depois colocar como variável
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
            let result = 0;
            for (let i = 0; i < quantity; i++) {
                result = randomDiceNumber(type);
                // console.log(quantity);
            }
            results = [...results, { quantity, type, result }];
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
                {results.map(({ quantity, type, result }) =>
                    Array.of(quantity).map((i) => (
                        <RollDice
                            key={`dice-${i}-${type}`}
                            type={type}
                            i={i}
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
