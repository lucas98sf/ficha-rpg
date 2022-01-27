import { updateAnotacoes } from "../../components/utils";
import Head from "next/head";
import {
    Attributes,
    Expertises,
    Resistances,
    Stats,
    Items,
    Skills,
    ItemsTooltips,
    SkillsTooltips,
    RollDices
} from "../../components/PlayerPage";

export async function getServerSideProps({ params }) {
    const name = params.name || null;
    const baseUrl =
        process.env.NODE_ENV == "development"
            ? process.env.development.url
            : process.env.production.url;
    const res = await fetch(
        `${baseUrl}/api/players/${encodeURIComponent(name)}`
    );
    const player = await res.json();

    const items = [],
        skills = [];
    for (const { ID, Quantidade } of player.Itens) {
        if (!ID) continue;
        const res = await fetch(`${baseUrl}/api/items/${ID}`);
        const item = await res.json();
        items.push({ ...item, Quantidade, ID });
    }
    for (const { ID } of player.Habilidades) {
        if (!ID) continue;
        const res = await fetch(`${baseUrl}/api/skills/${ID}`);
        let skill = await res.json();
        skills.push({ ...skill, ID });
    }
    return { props: { player, Itens: items, Habilidades: skills } };
}

export default function PlayerPage({ player, Itens, Habilidades }) {
    const {
        Nome,
        Imagem,
        Raça,
        Status,
        Atributos,
        Perícias,
        Resistências,
        Lins,
        Exp,
        Anotações,
    } = player;
    const StatsProps = { Nome, Imagem, Raça, Status, Lins, Exp };
    const ResistancesProps = { Nome, Resistências };
    const AttributesProps = { Nome, Atributos };
    const ExpertisesProps = { Nome, Perícias };
    const ItemsProps = { Nome, Itens };
    return (
        //<div class="grid-container">
        <center>
            <Head>
                <title>{Nome}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="tudo">
                <Stats {...StatsProps} />
                <Resistances {...ResistancesProps} />
                <Attributes {...AttributesProps} />
                <Expertises {...ExpertisesProps} />
                <Items {...ItemsProps} />
                <Skills Habilidades={Habilidades} />
                <div className="anotações">
                    Anotações
                    <textarea
                        type="text"
                        defaultValue={Anotações}
                        id="Anotações"
                        className="anotaçõesInput"
                        onKeyUp={() => updateAnotacoes(Nome)}
                    />
                </div>
            </div>
            <SkillsTooltips Habilidades={Habilidades} />
            <RollDices />
            <div id="dicesModal"/>
        </center>
    );
}
