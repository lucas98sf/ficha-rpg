export default function Items({ Itens }) {
    return (
        <div className="Items">
            <div>
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
                            <div>
                                Nome: {Nome}
                                <br />
                                Descrição: {Descrição} {
                                    (
                                        <div>
                                        { Dano ? (<div>Dano: {Dano}</div>) : '' }
                                        { Defesa ? (<div>Defesa: {Defesa}</div>) : '' }
                                        { Efeito ? (<div>Efeito: {Efeito}</div>) : '' }
                                        </div>
                                    )
                                }
                                <br />
                                <img src={Imagem} alt={Nome} />
                                <br />
                                Quantidade: {Quantidade}
                                <br />
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}
