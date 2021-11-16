export default function ItemsTooltips({ Itens }) {
    return (
        <div className="itemsTooltips">
            <h3>Itens</h3>
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
                        <div key={`tooltip-${Nome}`}>
                            Descrição: {Descrição}
                            {
                                <div>
                                    {Dano ? <div>Dano: {Dano}</div> : ""}
                                    {Defesa ? <div>Defesa: {Defesa}</div> : ""}
                                    {Efeito ? <div>Efeito: {Efeito}</div> : ""}
                                </div>
                            }
                            <br />
                            <img src={Imagem} alt={Nome} />
                        </div>
                    );
                }
            )}
        </div>
    );
}
