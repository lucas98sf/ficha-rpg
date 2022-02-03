import { reduce } from "lodash";
import Image from "next/image";

export default function Dice({ type, size, format, reverse }) {
    return (
        <div className="dadoImg" >
            {/* {console.log(format)} */}
            <Image
                src={`/images/D${type}${reverse ? "reverse" : ""}.${format}`}
                alt={type}
                width={size}
                height={size}
                // style={{ transform: `scaleX(${reverse ? -1 : 1})` }}
                // unoptimized={true}
            />
        </div>
    );
}
