import axios from "axios";
import _ from "lodash";
import RollTest from "../PlayerPage/RollTest";
import React, { useEffect, useState } from "react";
import { RollDice } from "../PlayerPage/RollDices";
import ReactDOM from "react-dom";

const getValueById = (id) => {
    return document.getElementById(id).value;
};

const getTextById = (id) => {
    return document.getElementById(id).innerText;
};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

let renderingDices = false;
async function renderD20(nomePericia) {
    if (renderingDices) return;
    renderingDices = true;
    const props = { nomePericia, pericia: getTextById(nomePericia) };
    const container = document.getElementById("dicesModal");
    ReactDOM.render(<RollTest {...props} />, container);
    await timer(3100);
    ReactDOM.unmountComponentAtNode(container);
    renderingDices = false;
}

async function renderDices(results) {
    if (renderingDices) return;
    renderingDices = true;
    const container = document.getElementById("dicesModal");
    const totalResultValue = results.reduce((acc, cur) => acc + cur.result, 0);
    const Dices = () => {
        const [totalResult, setTotalResult] = useState(null);

        useEffect(() => {
            if (totalResult === null) {
                timer(2000).then(() => setTotalResult(totalResultValue));
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
}

function updateAnotacoes(nomePlayer) {
    const mudança = document.getElementById("Anotações").value;
    console.log(mudança);
    const changes = {
        Anotações: mudança + ".",
    };

    updatePlayer(changes, nomePlayer)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => alert("to bem nao"));
}

async function mudarValorSimples(nomePlayer, item) {
    const valor = Number(getValueById(item));
    const changes = {
        [item]: valor,
    };

    updatePlayer(changes, nomePlayer)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => alert("to bem nao"));
}

async function mudarValorStat(nomePlayer, tipo, stat) {
    // console.log(stat);
    const valor = Number(getValueById(stat));
    const changes = {
        Status: {
            [tipo]: {
                [stat]: valor,
            },
        },
    };
    updatePlayer(changes, nomePlayer)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => alert("to bem nao"));
}

async function mudarValorResistencia(botaoid, nomePlayer, resistencia, update) {
    const botao = document.getElementById(botaoid);
    console.log(nomePlayer);
    botao.disabled = true;
    if (isNaN(Number(getTextById(resistencia)))) {
        botao.disabled = false;
        return;
    }
    const valor = Number(getTextById(resistencia)) + Number(update);
    const changes = {
        Resistências: {
            [resistencia]: String(valor),
        },
    };

    updatePlayer(changes, nomePlayer)
        .then((result) => {
            console.log(result);
            document.getElementById(resistencia).innerText = valor;
        })
        .catch((err) => alert("to bem nao"));
    botao.disabled = false;
}

async function mudarValorPericia(
    botaoId,
    nomePlayer,
    classePericia,
    pericia,
    update
) {
    const botao = document.getElementById(botaoId);
    botao.disabled = true;
    const valor = Number(getTextById(pericia)) + Number(update);
    if (valor >= 1 && valor <= 19) {
        const changes = {
            Perícias: {
                [classePericia]: {
                    [pericia]: valor,
                },
            },
        };
        updatePlayer(changes, nomePlayer)
            .then((result) => {
                console.log(result);
                document.getElementById(pericia).innerText = valor;
            })
            .catch((err) => alert("to bem nao"));
    } else alert("chega mano");
    botao.disabled = false;
}

async function mudarValorAtributo(botaoId, nomePlayer, atributo, update) {
    const botao = document.getElementById(botaoId);
    botao.disabled = true;
    const valor = Number(getTextById(atributo)) + Number(update);
    if (valor >= 1 && valor <= 19) {
        const changes = {
            Atributos: {
                [atributo]: valor,
            },
        };
        updatePlayer(changes, nomePlayer)
            .then((result) => {
                console.log(result);
                document.getElementById(atributo).innerText = valor;
            })
            .catch((err) => alert("to bem nao"));
    } else alert("chega mano");
    botao.disabled = false;
}

async function updatePlayer(changes, nomePlayer) {
    const hostname =
        window.location.hostname === "localhost"
            ? "localhost:3000"
            : window.location.hostname;
    const url = `${window.location.protocol}//${hostname}`;
    // console.log(url);
    return await axios.patch(`${url}/api/players/${nomePlayer}`, changes);
}

async function buscarItem(nome) {
    const hostname =
        window.location.hostname === "localhost"
            ? "localhost:3000"
            : window.location.hostname;
    const url = `${window.location.protocol}//${hostname}`;
    // console.log(url);
    const items = await axios
        .get(`${url}/api/items`)
        .then((result) => result.data);
    const item = items.find((item) => item.Nome.match(new RegExp(nome, "i")));
    if (typeof item === "undefined") {
        console.log("n existe");
        return;
    }
    item.ID = item.item_id;
    return item;
}

function tooltipMouse(e, Nome) {
    // console.log(Nome);
    var x = e.clientX;
    var y = e.clientY;
    const tooltip = document.getElementById(`tooltip${Nome}`);
    tooltip.style.visibility = "visible";
    tooltip.style.left = x + 10 + "px";
    tooltip.style.top = y + 10 + "px";
    var tipX = "px";
    var tipY = "px";
    var tooltip_rect = tooltip.getBoundingClientRect();

    if (tooltip_rect.x + tooltip_rect.width > window.innerWidth - 30) {
        tipX = tooltip_rect.width;
        // console.log(tipX);
    }
    if (tooltip_rect.y + tooltip_rect.height > window.innerHeight - 30) {
        tipY = tooltip_rect.height - 40;
    }

    tooltip.style.top = y - tipY + "px";
    tooltip.style.left = x - tipX + "px";
}

function tooltipMouseFixo(e, Nome) {
    const tooltip = document.getElementById(`tooltip${Nome}`);
    tooltip.style.visibility = "visible";
}

async function tooltipMouseOut(Nome) {
    const tooltip = document.getElementById(`tooltip${Nome}`);
    tooltip.style.visibility = "hidden";
}

export {
    getValueById,
    getTextById,
    mudarValorPericia,
    mudarValorAtributo,
    tooltipMouse,
    tooltipMouseOut,
    mudarValorResistencia,
    mudarValorSimples,
    mudarValorStat,
    updatePlayer,
    buscarItem,
    renderD20,
    renderDices,
    updateAnotacoes,
    tooltipMouseFixo,
};
