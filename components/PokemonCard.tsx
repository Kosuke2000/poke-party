import { useEffect, useState } from "react"

import { PokeApiResponseType } from "../PokeApi"
import { Pokemon } from "../types/Pokemon"

interface PokemonCardProp {
  name: string
}

export const PokemonCard = ({ name }: PokemonCardProp) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  useEffect(() => {
    fetch(url)
      .then<PokeApiResponseType>((res) => res.json())
      .then((res) => {
        const types = res.types.map((item) => item.type.name)

        const newState: Pokemon = {
          img: res.sprites.front_default,
          name: res.name,
          types,
        }
        setPokemon(newState)
      })
  }, [])

  if (!pokemon)
    return <h1>申し訳ありません。データの取得に失敗したようです🙇</h1>

  return (
    <div className="p-2 w-96 rounded-md border shadow">
      <img src={pokemon.img} alt="" />
      <h2 className="text-xl">{pokemon.name}</h2>
      <div className="flex gap-1">
        {pokemon.types.map((type) => (
          <p key={type} className="bg-gray-300">
            {type}
          </p>
        ))}
      </div>
    </div>
  )
}
