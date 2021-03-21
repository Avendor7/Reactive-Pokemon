import React, { useState } from 'react';
import PokeCell from './pokecell/PokeCell';
import './PokeList.scss';

function PokeList(props) {
  
  //get first 151 pokemon
  const interval = {
    offset: 0,
    limit: 151,
  }

  
  const [pokemonArray, setPokemonArray] = useState([]);

  props.Dex.getPokemonsList(interval).then(function(response) {
    //setPokemonArray(response.results);
  })

  return (
    <div className="pokelist">
      <ul>
        {pokemonArray.map((item)=>(
            <PokeCell pokemon={item.name}/>
        ))}
      </ul>
    </div>
  );
}
export default PokeList;