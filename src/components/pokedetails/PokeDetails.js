import React, {useEffect, useState} from 'react'
import pokedex from '../../PokeDex'

import './PokeDetails.scss'

function PokeDetails({selectedPokemon}) {
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    pokedex.getPokemonByName(selectedPokemon).then(function (response) {
      setPokemonDetails(response)
      console.log('response ' + response.name)
    })
  }, [selectedPokemon])

  return (
    <div className="pokedetails">
      <p>{selectedPokemon}</p>
      <p>{pokemonDetails.name}</p>
    </div>
  )
}

export default PokeDetails
