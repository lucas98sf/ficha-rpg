import Profile from "../../components/Profile";
import Head from "next/head";

export async function getServerSideProps() {
    // const hostname =
    //     window.location.hostname === "localhost"
    //         ? "localhost:3000"
    //         : window.location.hostname;
    // const url = `${window.location.protocol}//${hostname}`;
    // const { origin } = absoluteUrl(req)

    const res2 = await fetch(`http://localhost:3000/api/players`);
    const players = await res2.json();
    return { props: { players} };
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
                const { Nome, Imagem, Raça, Status, Atributos, Cor } = player;
                const props = { Nome, Imagem, Raça, Status, Atributos, Cor };
                return <Profile key={`${Nome}profile`} {...props} />;
            })}
        </div>
        </div>
    );
}
