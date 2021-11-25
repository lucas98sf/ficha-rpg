import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <Link href={`https://mundo-sem-vida.herokuapp.com/players`}>
          Players
        </Link>
    </div>
  )
}