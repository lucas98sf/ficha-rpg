import Image from "next/image";

export default function TempFixDices() {
    return (
        <div style={{ visibility: "hidden" }}>
            <Image
                src={`/images/D4.png`}
                alt="D4"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D4reverse.png`}
                alt="D4"
                width="128px"
                height="128px"
            />

            <Image
                src={`/images/D6.png`}
                alt="D6"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D6reverse.png`}
                alt="D6"
                width="128px"
                height="128px"
            />

            <Image
                src={`/images/D8.png`}
                alt="D8"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D8reverse.png`}
                alt="D8"
                width="128px"
                height="128px"
            />

            <Image
                src={`/images/D10.png`}
                alt="D10"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D10reverse.png`}
                alt="D10"
                width="128px"
                height="128px"
            />

            <Image
                src={`/images/D12.png`}
                alt="D12"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D12reverse.png`}
                alt="D12"
                width="128px"
                height="128px"
            />

            <Image
                src={`/images/D20.png`}
                alt="D20"
                width="128px"
                height="128px"
            />
            <Image
                src={`/images/D20reverse.png`}
                alt="D20"
                width="128px"
                height="128px"
            />
        </div>
    );
}
