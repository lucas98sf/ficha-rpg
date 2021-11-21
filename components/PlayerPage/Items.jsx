import { mudarQuantidadeItem, tooltipMouse, tooltipMouseOut } from "../utils";

export default function Itens({ Nome, Itens }) {
    const playerName = Nome;
    return (
        <div className="Items">
            <h3>Itens</h3>
            {Itens.map(({ Nome, Quantidade, ID },index) => {
                return (
                    <div key={Nome} className="Item">
                        <div
                            className="itemName"
                            onMouseMove={(event) => tooltipMouse(event, Nome)}
                            onMouseOut={() => tooltipMouseOut(Nome)}
                        >
                            {Nome}
                        </div>
                        <button className="plusItem" onClick={()=> mudarQuantidadeItem(playerName, index, ID, +1)}>+</button>
                        <div className="itemQuantity" id={ID}>{Quantidade}</div>
                        <button className="minusItem" onClick={()=> mudarQuantidadeItem(playerName, index, ID, -1)}>-</button>
                    </div>
                );
            })}
            {/* <input type="text" />
            <button className="addItem">+</button> */}
        </div>
    );
}
