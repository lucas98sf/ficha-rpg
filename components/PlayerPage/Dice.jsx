import Image from "next/image";

export default function Dice({ size }) {
    return (
        <div className="dadoImg">
            <Image
                src={`/images/D${size}.png`}
                alt={size}
                width="200vw"
                height="200vw"
            />
        </div>
    );
}
