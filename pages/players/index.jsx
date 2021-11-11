import Profile from "../../components/Profile";

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/players`);
    const players = await res.json();
    return { props: { players } };
}

export default function PlayerPage({ players }) {
    return (
        //<div class="grid-container">
        <div className="playersMenu">
        <div className="playersGrid">
            {players.map((player) => {
                const { Nome, Imagem, Raça, Status, Atributos, Cor } = player;
                const props = { menu: true, Nome, Imagem, Raça, Status, Atributos, Cor };
                return <Profile key={Nome} {...props} />;
            })}
        </div>
        </div>
    );
}
