import {
    Attributes,
    Pericias,
    Resistances,
    Stats,
    Items,
    Skills,
    ItemsTooltips,
} from "../../components/PlayerPage";

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const res = await fetch(`http://localhost:3000/api/players/${name}`);
    const player = await res.json();

    const items = [],
        skills = [];
    for (const { ID, Quantidade } of player.Itens) {
        if (!ID) continue;
        const res = await fetch(`http://localhost:3000/api/items/${ID}`);
        const item = await res.json();
        items.push({ ...item, Quantidade, ID });
    }
    for (const { ID } of player.Habilidades) {
        if (!ID) continue;
        const res = await fetch(`http://localhost:3000/api/skills/${ID}`);
        let skill = await res.json();
        skills.push({ ...skill, ID });
    }
    return { props: { player, Itens: items, Habilidades: skills } };
}

export default function PlayerPage({ player, Itens, Habilidades }) {
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
                <Items Itens={Itens} />
                <Skills Habilidades={Habilidades} />
                
            </div>
            <ItemsTooltips Itens={Itens} />
        </center>
    );
}
