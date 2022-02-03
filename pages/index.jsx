import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
    const router = useRouter();
    const [pageLoading, setPageLoading] = React.useState(false);
    React.useEffect(() => {
        const handleStart = () => {
            setPageLoading(true);
        };
        const handleComplete = () => {
            setPageLoading(false);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [router]);
    return pageLoading ? (
        <div className="loading">
            <Image
                src={`/images/load.gif`}
                alt="loading"
                width="500"
                height="300"
            />
        </div>
    ) : (
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
                <Link href="/players" passHref>
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
