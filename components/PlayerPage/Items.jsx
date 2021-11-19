import { tooltipMouse, tooltipMouseOut } from "../utils";

export default function Items({ Itens }) {
    return (
        <div className="Items">
            <h3>Itens</h3>
            {Itens.map(({ Nome, Quantidade }) => {
                return (
                    <div key={Nome} className="Item">
                        <div
                            className="itemName"
                            onMouseMove={(event) => tooltipMouse(event, Nome)}
                            onMouseOut={() => tooltipMouseOut(Nome)}
                        >
                            {Nome}
                        </div>
                        <button className="plusItem">+</button>
                        <div className="itemQuantity">{Quantidade}</div>
                        <button className="minusItem">-</button>
                    </div>
                );
            })}
            <button className="addItem">+</button>
        </div>
    );
}
