import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { PokemonCard } from "../components/PokemonCard"

const MemberPage = () => {
  const [party, setParty] = useState<string[]>([])
  const [name, setName] = useState("")

  const router = useRouter()

  useEffect(() => {
    const name = window.location.pathname.slice(1)
    setName(name)

    const url = `https://navi-poke-api.youuchiharu.workers.dev/?name=${name}`

    fetch(url, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => res.party)
      .then(setParty)
  }, [])

  if (typeof party === "string") router.push("/404")

  return (
    <div>
      <Head>
        <title>Party Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-4 justify-center items-center m-0 min-h-screen">
        <h1 className="text-3xl font-semibold">{name}の手持ちポケモン</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {typeof party !== "string" &&
            party.map((pokeName) => (
              <PokemonCard key={pokeName} name={pokeName} />
            ))}
        </div>
      </main>
    </div>
  )
}

export default MemberPage
