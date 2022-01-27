import Image from "next/image";

export default function Dice({ type, size }) {
    return (
        <div className="dadoImg">
            <Image
                src={`/images/D${type}.png`}
                alt={type}
                width={size}
                height={size}
                unoptimized={true}
            />
        </div>
    );
}
