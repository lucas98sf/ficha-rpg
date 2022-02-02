import Image from "next/image";

export default function Dice({ type, size, format, reverse }) {
    return (
        <div className="dadoImg">
            {reverse === true ? (
                <Image
                    src={`/images/D${type}.${format}`}
                    alt={type}
                    width={size}
                    height={size}
                    // unoptimized={true}
                />
            ) : (
                <Image
                    src={`/images/D${type}reverse.${format}`}
                    alt={type}
                    width={size}
                    height={size}
                    // unoptimized={true}
                />
            )}
        </div>
    );
}
