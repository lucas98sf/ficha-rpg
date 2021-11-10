import Link from "next/link";

export default function Profile({
    menu = false,
    Nome,
    Imagem,
    Raça,
    Status,
    Atributos,
}) {
    return (
        <Link
            className={menu ? "" : "disabled='true"}
            href={`/players/${Nome}`}
        >
            <button className="playerButton" id={`${Nome}Button`}>
                <div className="playerNameText">{Nome}</div>
                <div className="playerImg">
                    <img className="playerImg" src={Imagem}></img>
                </div>
                <div className="playerRaceText">{Raça}</div>

                <div className="playerStatsText" id={`status${Nome}Text`}>
                    <div className="playerHealthText" id={`health${Nome}Text`}>
                        PV ⠀{Status["Vida Atual"]}/{Status["Vida Máxima"]}⠀
                    </div>
                    <div className="playerSanityText" id={`sanity${Nome}Text`}>
                        PS ⠀{Status["Sanidade Atual"]}/
                        {Status["Sanidade Máxima"]}⠀
                    </div>
                    <div className="playerMagicText" id={`magic${Nome}Text`}>
                        PM ⠀{Status["Magia Atual"]}/{Status["Magia Máxima"]}⠀
                    </div>
                </div>
                <div
                    className="playerAttributesText"
                    id={`attributes${Nome}Text`}
                >
                    {Object.entries(Atributos).map(([nome, valor]) => {
                        return (
                            <div key={nome} className={`player${nome}Text`}>
                                {nome} ⠀{valor}
                            </div>
                        );
                    })}
                </div>
            </button>
        </Link>
    );
}
