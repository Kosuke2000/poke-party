import Head from "next/head"
import React from "react"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center m-0 min-h-screen">
        ローカルホストが立ち上がりました。
      </main>
    </div>
  )
}

export default Home