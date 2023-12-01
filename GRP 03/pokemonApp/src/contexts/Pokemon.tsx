import { ReactNode, createContext, useState } from "react";
import { TPoke } from "../types";

type tab = 'tab1' | 'tab2'

interface handleNewPokemonProps {
  tab: tab
  pokemon: TPoke
}

interface PokemonContextType {
  tab1Pokemon: TPoke | null
  tab2Pokemon: TPoke | null
  handleNewPokemon: ({ tab, pokemon }: handleNewPokemonProps) => void
}

interface PokemonContextProviderProps {
  children: ReactNode
}

export const PokemonContext = createContext({} as PokemonContextType)

export function PokemonContextProvider({ children }: PokemonContextProviderProps) {
  const [tab1Pokemon, setTab1Pokemon] = useState<TPoke | null>(null)
  const [tab2Pokemon, setTab2Pokemon] = useState<TPoke | null>(null)

  function handleNewPokemon({ tab, pokemon }: handleNewPokemonProps) {
    if (tab === 'tab1') {
      setTab1Pokemon(pokemon)
    }

    if (tab === 'tab2') {
      setTab2Pokemon(pokemon)
    }
  }

  return (
    <PokemonContext.Provider value={{
      tab1Pokemon,
      tab2Pokemon,
      handleNewPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  )
}