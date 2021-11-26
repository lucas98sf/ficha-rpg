import { rolarMultiDados, updateAnotacoes } from "../../components/utils";
import Head from "next/head";
import Image from "next/image";
import {
    Attributes,
    Pericias,
    Resistances,
    Stats,
    Items,
    Skills,
    ItemsTooltips,
    SkillsTooltips,
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
    const PericiasProps = { Nome, Perícias };
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
                <Pericias {...PericiasProps} />
                <Items {...ItemsProps} />
                <Skills Habilidades={Habilidades} />
                <div className="multidados">
                    <input type="text" className="" id="inputMultiDados" />
                    <div id="textTipoDado"></div>
                    <div id="textResultDado"></div>
                    <div id="totalDados"></div>
                    <button
                        className="botaoMultiDados"
                        onClick={() => rolarMultiDados()}
                    >
                        Rolar
                    </button>
                </div>
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
            <div id="containerD20">
                <div id="nomePericia">nomepericia</div>
                <div id="numeroRolado">dadotexto</div>
                <div id="dadoImg">
                    <Image
                        src="/images/D20.png"
                        alt="D20"
                        width={`200vw`}
                        height={`200vw`}
                    />
                </div>
            </div>
            <div id="resultadoTexto"></div>
        </center>
    );
}
