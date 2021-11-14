import {
    Attributes,
    Pericias,
    Resistances,
    Stats,
} from "../../components/PlayerPage";

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const res = await fetch(`http://localhost:3000/api/players/${name}`);
    const player = await res.json();
    return { props: { player } };
}

export default function PlayerPage({ player }) {
    const { Nome, Imagem, Raça, Status, Atributos, Perícias, Resistências } =
        player;
    const StatsProps = { Nome, Imagem, Raça, Status };
    const ResistancesProps = { Resistências };
    const AttributesProps = { Nome, Atributos };
    const PericiasProps = { Nome, Perícias };
    return (
        //<div class="grid-container">
        <center>
            <div className="tudo">
                <Stats {...StatsProps} />
                <Resistances {...ResistancesProps} />
                <Attributes {...AttributesProps} />
                <Pericias {...PericiasProps} />
            </div>
        </center>
    );
}
