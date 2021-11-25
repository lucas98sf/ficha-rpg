import Link from "next/link";

export default function Profile({
    Nome,
    Imagem,
    Raça,
    Status,
    Atributos,
    Cor,
}) {
    return (
        <Link href={`/players/${Nome}`}>
            <button
                className="playerButton"
                id={`${Nome}Button`}
                style={{ color: `white`, borderColor: `white` }}
            >
                <div
                    className="playerNameText"
                    id={`${Nome}Text`}
                    style={{ borderColor: `white` }}
                >
                    {Nome}
                </div>
                <div className="playerImg">
                    <img className="playerImg" src={Imagem}></img>
                </div>
                {/* <div className="playerRaceText">{Raça}</div> */}
                {Object.entries(Status).map(([type, stat]) => {
                    const values = Object.entries(stat).map(([name, value]) => {
                        return (
                            <div key={name} className={`${name}Profile`}>
                                <div
                                    className={`${name}InputProfile`}
                                    id={`${name}Profile`}
                                >
                                    {value}
                                </div>
                            </div>
                        );
                    });
                    return (
                        <div key={`${Nome}${type}`} className="statsProfile">
                            <div className={`${type}Profile`}>
                                <div className="titleStatProfile">{type}</div>
                                <div className="barraStat">/</div>
                                {values}
                            </div>
                        </div>
                    );
                })}
                <div
                    className="playerAttributesText"
                    id={`attributes${Nome}Text`}
                >
                    {Object.entries(Atributos).map(([nome, valor]) => {
                        return (
                            <div key={nome} className={`player${nome}Text`}>
                                {nome}
                                <br />
                                {valor}
                            </div>
                        );
                    })}
                </div>
            </button>
        </Link>
    );
}
