export default function TextTooltips() {
    return (
        <div className="textTooltips">
            {/* Resistências */}
            <div id="tooltipPerfurante">
                Reduz o dano de armas como lanças e flechas
            </div>
            <div id="tooltipCorte">
                {" "}
                Reduz o dano de lâminas como espadas e facas{" "}
            </div>
            <div id="tooltipBrusco">
                {" "}
                Reduz o dano de armas como martelos e maças{" "}
            </div>
            <div id="tooltipElemental">
                Reduz o dano dos elementos da natureza como gelo e fogo
            </div>
            <div id="tooltipVeneno">
                Reduz o dano por turno de venenos aplicados ao seu personagem
            </div>
            <div id="tooltipMorte">
                Dano de morte proveniente da maioria das magias dos corvos será
                menos eficiente
            </div>
            <div id="tooltipMagia">
                Proteção extremamente versátil reduz o dano de inúmeras
                habilidades mágicas
            </div>

            {/* Stats */}
            <div id="tooltipPV">
                Seus pontos de vida, se ele chegar a zero você entra em morrendo
            </div>
            <div id="tooltipPS">
                Pontos de sanidade, quando zerado seu personagem entra em
                loucura
            </div>
            <div id="tooltipPM">
                Seus pontos de magia, o ritual de evolução recupera todos os
                seus pontos
            </div>

            {/* Exp e Lins */}
            <div id="tooltipExp">
                A cada 100 pontos de experiência você pode evoluir seu
                personagem para o próximo nível, é necessário participar de um
                ritual de evolução para utiliza-los
            </div>
            <div id="tooltipLins">
                {" "}
                Dependendo do lugar você pode até comprar pessoas com certas
                quantidades de Lins.{" "}
            </div>
        </div>
    );
}
