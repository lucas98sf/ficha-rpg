export default function Items({ Itens }) {
    return (
        <div className="Items">
            <h3>Itens</h3>
            {Itens.map(({ Nome, Quantidade }) => {
                return (
                    <div key={Nome} className="Item">
                        <div>{Nome}</div>
                        <div>{Quantidade}</div>
                    </div>
                );
            })}
        </div>
    );
}
