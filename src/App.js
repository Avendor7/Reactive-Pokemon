import React, { useState } from 'react';
import './App.scss';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';
import Searchbox from './components/searchbox/Searchbox';
const P = require("pokeapi-js-wrapper");
//configure dex
const Pokedex = new P.Pokedex({
  protocol:"https",
  cache: true,
  timeout: 5000
});

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState("pikachu");

    function handleChange(newValue) {
      setSelectedPokemon(newValue);
      console.log(selectedPokemon);
    }

  return (
    <div className="App">
      <Searchbox selectedPokemon={selectedPokemon} onChange={handleChange}/>
      <PokeList dex={Pokedex}/>
      <PokeDetails dex={Pokedex} selectedPokemon={selectedPokemon}/>
      
    </div>
  );
}

export default App;
