import React, { useState } from 'react';

function PokeDetails(props) {
  // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);


  const [pokemonArray, setPokemonArray] = useState([]);

  props.dex.getPokemonByName(props.selectedPokemon).then(function(response) {
    setPokemonArray(response.results);
    console.log(response.results);
  })

  return (
    <div>
      <p>{props.selectedPokemon}</p>
      <p>{pokemonArray}</p>
    </div>
  );
}

export default PokeDetails;