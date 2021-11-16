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
    for (const item_ of player.Itens) {
        const { ID, Quantidade } = item_;
        const res = await fetch(`http://localhost:3000/api/items/${ID}`);
        const item = await res.json();
        player.Itens.push({ ...item, Quantidade });
    }
    return { props: { player } };
}

export default function PlayerPage({ player }) {
    const { Nome, Imagem, Raça, Status, Atributos, Perícias, Resistências, Itens } =
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

                <div className="Items">
                    <div>Item
                        {Itens.map((item)=>{
                            return(
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                        <div>Nome</div>
                        <div>Quantidade</div>
                    </div>
                </div>
                <div className="Skills">
                    <div>Skill
                        <div>Nome</div>
                        <div>Custo</div>
                    </div>
                </div>
            </div>
        </center>
    );
}
