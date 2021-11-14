async function mudarValorPericia(botao, nomePlayer, classePericia, pericia, update) {
    botao.disabled = true;
    const valor = Number(getTextById(pericia)) + Number(update);
    if (valor >= 1 && valor <= 19) {
        await updatePlayer(nomePlayer, classePericia, pericia, valor);
        document.getElementById(pericia).innerText = valor
    } else alert("chega mano");
    botao.disabled = false;
}

async function updatePlayer(nomePlayer, classePericia, pericia, valor) {
    try {
        const changes = {
            Perícias: {
                [classePericia]: {
                    [pericia]: valor,
                },
            },
        };
        await axios.patch(`players/${nomePlayer}`, changes);
        return;
    } catch (error) {
        console.log(error);
    }
}
