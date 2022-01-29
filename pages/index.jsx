import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="WIP">
                <Image
                    src={`/images/WIP.png`}
                    alt="wip"
                    width="96"
                    height="48"
                    unoptimized={true}
                />
            </div>
            <div className="linkPlayers">
            <Link href="/players"  passHref>
            <Image 
                    src="/images/loadFixed.png"
                    alt="link"
                    width="500"
                    height="300"
                    unoptimized={true}
                />
            </Link>
            </div>
        </div>
    );
}
