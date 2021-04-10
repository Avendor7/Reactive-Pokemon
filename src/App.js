import React, {useState} from 'react';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';
import Searchbox from './components/searchbox/Searchbox';

import './App.scss';

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState('squirtle');

    function handleChange(newValue) {
        setSelectedPokemon(newValue);
        console.log(selectedPokemon);
    }

    return (
        <div className="App">
            <Searchbox selectedPokemon={selectedPokemon} onChange={handleChange}/>
            <PokeList/>
            <PokeDetails selectedPokemon={selectedPokemon}/>
        </div>
    );
}

export default App;
