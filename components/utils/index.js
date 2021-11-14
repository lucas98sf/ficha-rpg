import axios from "axios";

const getValueById = (id) => {
    return document.getElementById(id).value;
};

const getTextById = (id) => {
    return document.getElementById(id).innerText;
};

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
    return await axios.patch(
        `${url}/api/players/${nomePlayer}`,
        changes
    );
}

export { getValueById, getTextById, mudarValorPericia, mudarValorAtributo };
