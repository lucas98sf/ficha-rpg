export default function SkillsTooltips({ Habilidades }) {
    return (
        <div className="SkillsTooltips">
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
                        <div key={Nome} className="skillTooltip" id={`tooltip${Nome}`}>
                            {Custo ? (
                                <div className="skillCost">
                                    Custo: {Custo}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="skillDescription">
                                {Descrição}
                            </div>
                            {Custo_Aprimorado ? (
                                <div className="skillCost2">
                                    <div className="improved">Aprimorado</div>
                                    Custo extra: {Custo_Aprimorado}
                                </div>
                            ) : (
                                ""
                            )}
                            {Descrição_Aprimorada ? (
                                <div className="skillDescription2">
                                    {Descrição_Aprimorada}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="skillType" id={`type${Tipo}`}>{Tipo}</div>
                        </div>
                    );
                }
            )}
        </div>
    );
}
