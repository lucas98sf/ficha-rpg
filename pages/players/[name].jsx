import Profile from "../../components/Profile";
import Script from 'next/script'
import axios from 'axios';

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const res = await fetch(`http://localhost:3000/api/players/${name}`);
    const player = await res.json();
    return { props: { player } };
}
const getValueById = (id) => {
    return document.getElementById(id).value
}

const getTextById = (id) => {
    return document.getElementById(id).innerText
}

async function mudarValorPericia(botaoId, nomePlayer, classePericia, pericia, update) {
    const botao = document.getElementById(botaoId);
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
        await axios.patch(`http://localhost:3000/api/players/${nomePlayer}`, changes);
        return;
    } catch (error) {
        console.log(error);
    }
}


export default function PlayerPage({ player }) {
    const { Nome, Imagem, Raça, Status, Atributos, Perícias, Resistências } = player;
    const props = { Nome, Imagem, Raça, Status, Atributos };
    return (
        //<div class="grid-container">
        <center>
            <div className="tudo">
            {/* <Profile key={Nome} {...props} className="profile" /> */}
            <div className="centro">
                <div className="playerNameFicha">{Nome}</div>
                <img className="playerImgFicha" src={Imagem}></img>
                {/* <div className="playerRaceFicha">{Raça}</div> */}
                <div className="playerHealthFicha">PV:{Status["Vida Atual"]}/{Status["Vida Máxima"]}</div>
                <div className="playerSanityFicha">PS:{Status["Sanidade Atual"]}/{Status["Sanidade Máxima"]}</div>
                <div className="playerMagicFicha">PM:{Status["Magia Atual"]}/{Status["Magia Máxima"]}</div>
            </div>
            <div className="resistances">
                <div className="titleResistances">Resistências</div>
                {Object.entries(Resistências).map(([name, value])=>{
                    return(
                        <div key={name} className="resistancesGrid">
                            <div className="resistanceName">{name}</div>
                            <div className="resistanceValue">{value}</div>
                        </div>
                    )
                })}
            </div>
            <div className="attributesFicha">
                {Object.entries(Atributos).map(([name, value])=>{
                    return(
                        <div key={name} className="attributesGrid">
                            <button className="attributeNameFicha">{name}</button>
                            <div className="attributeButtonsFicha">
                                <button className="attributeUp" id={`${name}Up`} onClick={()=> mudarValorPericia(`${name}Up`, Nome, Perícias, name, +1)}>+</button>
                                <div className="attributeValueFicha" id={`${name}`}>{value}</div>
                                <button className="attributeDown" id={`${name}Down`} onClick={()=> mudarValorPericia(`${name}Up`, Nome, Perícias, name, -1)}>-</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="pericias">
                {Object.entries(Perícias).map(([type, pericias]) => {
                    const values = Object.entries(pericias).map(
                        ([name, value]) => {
                            return (
                                <div key={name} className="periciaNameValue">
                                    <button className="periciaName" id={`${name}Button`}>
                                        {name}
                                    </button>
                                    <div className="buttonsGroup" id={`${name}Buttons`}>
                                        <button className="up" id={`${name}Up`} onClick={()=> mudarValorPericia(`${name}Up`, Nome, Perícias, name, +1)}>+</button>
                                        <button className="periciaValue" id={`${name}`}>{value}</button>
                                        <button className="down"id={`${name}Down`} onClick={()=> mudarValorPericia(`${name}Up`, Nome, Perícias, name, -1)}>-</button>
                                    </div>  
                                </div>
                            );
                        }
                    );
                    return (
                        <div key={type} className="periciaType" id={`${type}`}>
                            {type}
                            <br />
                            {values}
                        </div>
                    );
                })}
            </div>
            </div>
        </center>
    );

    
}
