import Profile from "../../components/Profile";

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const res = await fetch(`http://localhost:3000/api/players/${name}`);
    const player = await res.json();
    return { props: { player } };
}

export default function PlayerPage({ player }) {
    const { Nome, Imagem, Raça, Status, Atributos, Perícias } = player;
    const props = { Nome, Imagem, Raça, Status, Atributos };
    return (
        //<div class="grid-container">
        <center>
            <Profile key={Nome} {...props} />
            <div>
                <h3>Perícias</h3>
                <div>
                    {Object.entries(Perícias).map(([type, pericias]) => {
                        const values = Object.entries(pericias).map(
                            ([name, value]) => {
                                return (
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{value}</p>
                                    </div>
                                );
                            }
                        );
                        return (
                            <div>
                                <h4>{type}</h4>
                                {values}
                            </div>
                        );
                    })}
                </div>
            </div>
        </center>
    );
}
