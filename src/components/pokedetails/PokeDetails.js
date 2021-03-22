import React, { useState } from 'react';
import './PokeDetails.scss';
function PokeDetails(props) {

  const [pokemonDetails, setPokemonDetails] = useState([]);

  /*props.dex.getPokemonByName(props.selectedPokemon).then(function(response) {
    setPokemonDetails(response);
    console.log("response " + response.name);
  })
*/
  return (
    <div className="pokedetails">
      <p>{props.selectedPokemon}</p>
      <p>{pokemonDetails.name}</p>
    </div>
  );
}

export default PokeDetails;