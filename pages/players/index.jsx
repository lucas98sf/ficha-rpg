import Profile from "../../components/Profile";
import Head from "next/head";

export async function getServerSideProps() {
    const baseUrl = process.env.NODE_ENV == "development"
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
            <div className="playersGrid">
                <Head>
                    <title>Players</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {players.map((player) => {
                    const { Nome, Imagem, Raça, Status, Atributos, Cor } =
                        player;
                    const props = {
                        Nome,
                        Imagem,
                        Raça,
                        Status,
                        Atributos,
                        Cor,
                    };
                    if(player.Nome == "teste") {return}
                    return <Profile key={`${Nome}profile`} {...props} />;
                })}
            </div>
        </div>
    );
}
