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

                <div className="Items">
                    <div>
                        Item
                        {Itens.map(
                            ({
                                Nome,
                                Descrição,
                                Imagem,
                                Dano,
                                Defesa,
                                Efeito,
                                Quantidade,
                            }) => {
                                return (
                                    <div>
                                        {Nome}
                                        <br />
                                        {Descrição}
                                        <br />
                                        <img src={Imagem} alt={Nome} />
                                        <br />
                                        {Dano}
                                        <br />
                                        {Defesa}
                                        <br />
                                        {Efeito}
                                        <br />
                                        {Quantidade}
                                    </div>
                                );
                            }
                        )}
                        <div>Nome</div>
                        <div>Quantidade</div>
                    </div>
                </div>
                <div className="Skills">
                    <div>
                        Skill
                        {Habilidades.map(
                            ({
                                Nome,
                                Descrição,
                                Descrição_Aprimorada,
                                Custo,
                                Custo_Aprimorado,
                                Tipo,
                            }) => {
                                const descricaoAprimorada =
                                    Descrição_Aprimorada ? (
                                        <div>
                                            <br />
                                            Descrição aprimorada:
                                            Descrição_Aprimorada
                                        </div>
                                    ) : (
                                        ""
                                    );
                                const custoAprimorado = Custo_Aprimorado ? (
                                    <div>
                                        <br />
                                        Custo aprimorado: Custo_Aprimorado
                                    </div>
                                ) : (
                                    ""
                                );
                                return (
                                    <div>
                                        {Nome}
                                        <br />
                                        {Descrição}
                                        {descricaoAprimorada}
                                        <br />
                                        {Custo}
                                        {custoAprimorado}
                                        <br />
                                        {Tipo}
                                    </div>
                                );
                            }
                        )}
                        <div>Nome</div>
                        <div>Custo</div>
                    </div>
                </div>
            </div>
        </center>
    );
}
