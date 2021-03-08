import React, { useState } from 'react';
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function PokeList() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // or with Promises
  let pikachu = P.getPokemonByName("pikachu")
  .then(function(response) {
    console.log(response)
  })
  return (
    <div>
      
    </div>
  );
}
export default PokeList;