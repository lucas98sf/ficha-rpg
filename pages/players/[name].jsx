import Profile from "../../components/Profile";

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const res = await fetch(`http://localhost:3000/api/players/${name}`);
    const player = await res.json();
    return { props: { player } };
}

export default function PlayerPage({ player }) {
    const { Nome, Imagem, Raça, Status } = player;
    const props = { Nome, Imagem, Raça, Status };
    return (
        //<div class="grid-container">
        <center>
            <Profile key={Nome} {...props} />
        </center>
    );
}
