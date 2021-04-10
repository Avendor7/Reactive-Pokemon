import React, { useEffect, useState } from 'react'
import PokeCell from './pokecell/PokeCell'
import './PokeList.scss'

function PokeList (props) {
  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {
    //get first 151 pokemon
    const interval = { offset: 0, limit: 151 }

    props.dex.getPokemonsList(interval)
      .then(response => setPokemonArray(response.results))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="pokelist">
      <ul>
        {pokemonArray.map((item) => (
          <PokeCell pokemon={item.name} />
        ))}
      </ul>
    </div>
  )
}

export default PokeList
