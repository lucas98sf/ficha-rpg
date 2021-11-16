export default function Skills({ Habilidades }) {
    return (
        <div className="Skills">
                <h3>Habilidades</h3>
                {Habilidades.map(
                    ({
                        Nome,
                        Descrição,
                        Descrição_Aprimorada,
                        Custo,
                        Custo_Aprimorado,
                        Tipo,
                    }) => {
                        return (
                            <div key={Nome}>
                                Nome: {Nome}<br />
                                Descrição: {Descrição}<br />
                                {Descrição_Aprimorada ? (
                                    <div>
                                        Descrição aprimorada:
                                        {Descrição_Aprimorada}
                                        <br />
                                    </div>
                                ) : (
                                    ""
                                )}
                                {Custo ? <div>Custo: {Custo}<br /></div> : ""}
                                {Custo_Aprimorado ? (
                                    <div>
                                        Custo aprimorado:
                                        {Custo_Aprimorado}
                                        <br />
                                    </div>
                                ) : (
                                    ""
                                )}
                                Tipo: {Tipo}
                                <br />
                                <br />
                            </div>
                        );
                    }
                )}
        </div>
    );
}
