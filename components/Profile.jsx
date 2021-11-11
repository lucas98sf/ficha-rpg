import Link from "next/link";

export default function Profile({
    menu = false,
    Nome,
    Imagem,
    Raça,
    Status,
    Atributos,
    Cor,
}) {
    return (
        <Link
            className={menu ? "" : "disabled='true"}
            href={`/players/${Nome}`}
        >
            
            <button className="playerButton" id={`${Nome}Button`} style={{color:`white`,borderColor:`white`}}>
                <div className="playerNameText" id={`${Nome}Text`} style={{borderColor:`white`}}>{Nome}</div>
                <div className="playerImg">
                    <img className="playerImg" src={Imagem}></img>
                </div>
                {/* <div className="playerRaceText">{Raça}</div> */}
                <div className="playerStatsText" id={`status${Nome}Text`}>
                    <div className="playerHealthText" id={`health${Nome}Text`}>
                        PV<br />{Status["Vida Atual"]}/{Status["Vida Máxima"]}
                    </div>
                    <div className="playerSanityText" id={`sanity${Nome}Text`}>
                        PS<br />{Status["Sanidade Atual"]}/{Status["Sanidade Máxima"]}
                    </div>
                    <div className="playerMagicText" id={`magic${Nome}Text`}>
                        PM<br />{Status["Magia Atual"]}/{Status["Magia Máxima"]}
                    </div>
                </div>
                <div
                    className="playerAttributesText"
                    id={`attributes${Nome}Text`}
                >
                    {Object.entries(Atributos).map(([nome, valor]) => {
                        return (
                            <div key={nome} className={`player${nome}Text`}>
                                {nome}<br />{valor}
                            </div>
                        );
                    })}
                </div>
            </button>
        </Link>
    );
}
