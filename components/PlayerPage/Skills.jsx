import { tooltipMouse, tooltipMouseOut } from "../utils";
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
                        <div key={Nome} className="skill">
                            <div
                                className="skillName"
                                
                                onMouseMove={(event) => tooltipMouse(event, Nome)}
                                onMouseOut={() => tooltipMouseOut(Nome)}
                            >
                                {Nome}
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}
