import "../public/styles.css";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
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
            <Image src={`/images/load.gif`} alt="loading" width="500" height="300"/>
        </div>
    ) : (
        <Component {...pageProps} />
    );
}

export default MyApp;
