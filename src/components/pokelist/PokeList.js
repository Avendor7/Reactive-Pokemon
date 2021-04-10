import React, {useEffect, useState} from 'react';
import PokeCell from './pokecell/PokeCell';
import pokedex from '../../PokeDex';

import './PokeList.scss';

function PokeList() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    //get first 151 pokemon
    const interval = {offset: 0, limit: 151};

    pokedex.getPokemonsList(interval)
      .then(response => setPokemonArray(response.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pokelist">
      <ul>
        {pokemonArray.map((item) => (
          <PokeCell key={item.name} pokemon={item.name}/>
        ))}
      </ul>
    </div>
  );
}

export default PokeList;
