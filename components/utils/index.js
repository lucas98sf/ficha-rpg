import axios from "axios";
import { update } from "lodash";

const getValueById = (id) => {
    return document.getElementById(id).value;
};

const getTextById = (id) => {
    return document.getElementById(id).innerText;
};


function rolarMultiDados(){
    const inputMultiDados = getValueById("inputMultiDados")
    const textoEscreverDados = document.getElementById("textTipoDado")
    const textoResultDado = document.getElementById("textResultDado")
    const total = document.getElementById("totalDados")

    const splitDados = inputMultiDados.split("+")
    const dados = splitDados.map(conjuntoDados => conjuntoDados.split("d"))

    const results = { }

    textoEscreverDados.innerText = ""
    textoResultDado.innerText = ""
    total.innerText = ""
    for(let [quant, dado] of dados){
        let resultsDado = []
        for(let i = 0; i < quant; i++){
            const result = Math.floor(Math.random() * dado + 1)
            resultsDado.push(result)
        }
        const tipoDado = "D" + dado
        results[tipoDado] = resultsDado
    }


    for(let result of Object.entries(results)){
        const tipoDado = result[0]
        const resultadosDados = result[1]
        const sum = result[1].reduce(add, 0)
        function add(accumulator, a) {
            return accumulator + a;
        }

        total.innerText += sum + "=" + tipoDado + "/";
        

        for(let resultadoDado of resultadosDados){
            escreverDados(tipoDado, resultadoDado)
        }

    }

    function escreverDados(dado, resultado){
        textoEscreverDados.innerText += dado + "/";
        textoResultDado.innerText += resultado + "/";
    }

}

function updateAnotacoes(nomePlayer){
    const mudança = document.getElementById("Anotações").value;
    console.log(mudança)
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

async function mudarValorStat(nomePlayer,tipo, stat) {
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

async function mudarQuantidadeItem(nomePlayer,itemPOS, itemID, update){
    const valor = Number(getTextById(itemID)) + Number(update);
    if(valor == 0){console.log("oi") }
    const changes = {
        Itens:{
            [itemPOS]:{
                Quantidade: valor,
            },
        },
    };
    updatePlayer(changes, nomePlayer).then((result)=>{
        console.log(result);
        document.getElementById(itemID).innerText = valor;
    }).catch((err)=> alert("to bem nao"));
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

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
let rolandoDado = false;
async function RollD20(nomePericia) {
    const dadoTexto = document.getElementById("numeroRolado");
    const resultadoTexto = document.getElementById("resultadoTexto");
    const divD20 = document.getElementById("containerD20");
    const nomeDaPericia = document.getElementById("nomePericia");
    let textoResultadoTeste;
    const D20 = Math.floor(Math.random() * 20 + 1);

    const normal = [
        20, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ];
    const bom = [
        0, 20, 20, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11,
        11,
    ];
    const extremo = [
        0, 0, 0, 20, 20, 20, 19, 19, 19, 19, 18, 18, 18, 18, 17, 17, 17, 17, 16,
    ];

    const pericia = getTextById(nomePericia);

    if (!rolandoDado) {
        rolandoDado = true;
        console.log(rolandoDado);
        divD20.style.visibility = "visible";
        nomeDaPericia.innerText = nomePericia;
        for (let i = 0; i <= 15; i++) {
            let dado20 = Math.floor(Math.random() * 20 + 1);
            dadoTexto.innerHTML = `${dado20}`;
            await timer(100);
        }

        if (D20 == 1) {
            textoResultadoTeste = "Desastre!";
        } else if (D20 < normal[pericia - 1]) {
            textoResultadoTeste = "Falha";
        } else if (D20 < bom[pericia - 1]) {
            textoResultadoTeste = "Normal";
        } else if (D20 < extremo[pericia - 1]) {
            textoResultadoTeste = "Bom";
        } else {
            textoResultadoTeste = "Extremo";
        }

        resultadoTexto.style.visibility = "visible";
        dadoTexto.innerHTML = `${D20}`;
        resultadoTexto.innerHTML = `${textoResultadoTeste}`;

        await timer(1500);
        resultadoTexto.style.visibility = "hidden";
        divD20.style.visibility = "hidden";
        rolandoDado = false;
        console.log(rolandoDado);
    }
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

function tooltipMouseOut(Nome) {
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
    RollD20,
    mudarValorResistencia,
    mudarValorSimples,
    mudarValorStat,
    mudarQuantidadeItem,
    rolarMultiDados,
    updateAnotacoes,
};
