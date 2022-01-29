import { tooltipMouseFixo, tooltipMouseOut } from "../utils";

export default function ImageTooltips( ) {
    return (
        <div
            id="tooltipImages"
            onMouseMove={(event) => tooltipMouseFixo(event, "Images")}
            onMouseOut={() => tooltipMouseOut("Images")}
        >
            <button >1</button>
            <button>2</button>
            <button>3</button>
        </div>
    );
}
