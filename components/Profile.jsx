import Link from "next/link";

export default function Profile({ menu = false, Nome, Imagem, Raça, Status }) {
    return (
        <Link
            className={menu ? "" : "disabled='true"} //ta funcionando isso aqui ja
            href={`/players/${Nome}`}
        >
            <button>
                <div className="playerNameText">{Nome}</div>
                <div className="playerImg">
                    <img id="playerImg" src={Imagem}></img>
                </div>
                <div className="playerRaceText">{Raça}</div>
                <center className={`vida${Raça}`}>
                    Vida: {Status["Vida Atual"]}
                </center>
            </button>
        </Link>
    );
}
