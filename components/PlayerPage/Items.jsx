import {
    updatePlayer,
    buscarItem,
    getTextById,
    getValueById,
    tooltipMouse,
    tooltipMouseOut,
} from "../utils";
import ItemsTooltips from "./ItemsTooltips";
import React, { useEffect, useState } from "react";

export default function Itens({ Nome, Itens }) {
    const nomePlayer = Nome;
    const [itens, setItens] = useState(Itens);

    const mudarQuantidadeItem = async (botaoId, itemPOS, itemID, update) => {
        const botao = document.getElementById(botaoId);
        botao.disabled = true;
        const valor = Number(getTextById(itemID)) + Number(update);
        let changes, newItens;
        if (valor === 0) {
            newItens = itens.filter((item) => item.ID !== itemID);
            changes = {
                Itens: itens.reduce((acc, { ID, Quantidade, _id }) => {
                    if (ID !== itemID) acc.push({ ID, Quantidade, _id });
                    return acc;
                }, []),
            };
        } else {
            newItens = itens.map((item) => {
                if (item.ID === itemID) item.Quantidade = valor;
                return item;
            });
            changes = {
                Itens: {
                    [itemPOS]: {
                        Quantidade: valor,
                    },
                },
            };
        }
        updatePlayer(changes, nomePlayer)
            .then((result) => {
                setItens(newItens);
                // console.log(result);
                // document.getElementById(itemID).innerText = valor;
            })
            .catch((err) => alert("to bem nao"));
        botao.disabled = false;
    };

    const adicionarItem = async (event) => {
        if (event.keyCode == 13){
            const nomeItem = getValueById("nomeItem")?.trim();
            console.log(nomeItem)
            if (!nomeItem) return;
            if (itens.some((item) => item.Nome.match(new RegExp(nomeItem, "i"))))
                return alert("vc ja tem esse");
            const item = await buscarItem(nomeItem);
            if (!item) return alert(`existe esse tal de ${nomeItem} não mano`);
            item.Quantidade = 1;
            const newItens = [...itens, item];
            const changes = {
                Itens: itens.reduce(
                    (acc, { ID, Quantidade, _id }) => {
                        acc.push({ ID, Quantidade, _id });
                        return acc;
                    },
                    [{ ID: item.ID, Quantidade: item.Quantidade, _id: item._id }]
                ),
            };
            updatePlayer(changes, nomePlayer)
                .then((result) => {
                    setItens(newItens);
                })
                .catch((err) => alert("to bem nao"));
        document.getElementById("nomeItem").value = "";

        }
    };

    return (
        <div className="Items">
            <h3>Itens</h3>
            <ItemsTooltips Itens={itens} />
            {itens.map(({ Nome, Quantidade, ID }, index) => {
                return (
                    <div key={Nome} className="Item">
                        <div
                            className="itemName"
                            onMouseMove={(event) => tooltipMouse(event, Nome)}
                            onMouseOut={() => tooltipMouseOut(Nome)}
                        >
                            {Nome}
                        </div>
                        <button
                            id={`${Nome}Up`}
                            className="plusItem"
                            onClick={() =>
                                mudarQuantidadeItem(`${Nome}Up`, index, ID, +1)
                            }
                        >
                            +
                        </button>
                        <div className="itemQuantity" id={ID}>
                            {Quantidade}
                        </div>
                        <button
                            id={`${Nome}Down`}
                            className="minusItem"
                            onClick={() =>
                                mudarQuantidadeItem(
                                    `${Nome}Down`,
                                    index,
                                    ID,
                                    -1
                                )
                            }
                        >
                            -
                        </button>
                    </div>
                );
            })}
            <input id="nomeItem" type="text" placeholder="Nome do item" onKeyDown={(event) => adicionarItem(event)}/>
        </div>
    );
}
