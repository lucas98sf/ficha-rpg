import Profile from "../../components/Profile";
import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps() {
    const baseUrl =
        process.env.NODE_ENV == "development"
            ? process.env.development.url
            : process.env.production.url;
    const res = await fetch(`${baseUrl}/api/players`);
    const players = await res.json();
    return { props: { players } };
}

export default function PlayerPage({ players }) {
    return (
        //<div class="grid-container">
        <div className="playersMenu">
            <div className="WIP">
                <Image
                    src={`/images/WIP.png`}
                    alt="wip"
                    width="96"
                    height="48"
                    unoptimized={true}
                />
            </div>

            <div className="playersGrid">
                <Head>
                    <title>Players</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {players.map((player) => {
                    const { Nome, Imagens, Raça, Status, Atributos, Cor } =
                        player;
                    const props = {
                        Nome,
                        Imagens,
                        Raça,
                        Status,
                        Atributos,
                        Cor,
                    };
                    if (player.Nome == "teste") {
                        return;
                    }
                    return <Profile key={`${Nome}profile`} {...props} />;
                })}
            </div>
        </div>
    );
}
