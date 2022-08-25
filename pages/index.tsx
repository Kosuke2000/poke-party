import Head from "next/head"
import Link from "next/link"
import React from "react"

import { MEMBER_LIST } from "../member"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-4 justify-center items-center m-0 min-h-screen cursor-pointer">
        <h1 className="text-3xl font-semibold">僕らのポケモン図鑑</h1>
        {MEMBER_LIST.map((member) => (
          <Link key={member.id} href={`/${member.name}`}>
            <div className="p-2 w-96 rounded-md border shadow">
              <h2 className="text-xl">{member.name}</h2>
              <p>{member.discription}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Home
