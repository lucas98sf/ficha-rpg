export default function ItemsTooltips({ Itens }) {
    return (
        <div className="itemsTooltips" >
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
                        <div key={`tooltip-${Nome}`}  id={`tooltip${Nome}`} className="tooltip">
                            <div className="itemNameTooltip">{Nome}</div>
                            {
                                <div>
                                    {Dano ? <div className="itemDamage">Dano: {Dano}</div> : ""}
                                    {Defesa ? <div className="itemDefense">Defesa: {Defesa}</div> : ""}
                                    {Efeito ? <div className="itemEffect">Efeito: {Efeito}</div> : ""}
                                </div>
                            }
                            <img src={Imagem} alt={Nome} />
                            <div className="itemDescription">{Descrição}</div>
                        </div>
                    );
                }
            )}
        </div>
    );
}
