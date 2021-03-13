import './App.scss';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';
import Searchbox from './components/searchbox/Searchbox';
const P = require("pokeapi-js-wrapper");
const Pokedex = new P.Pokedex();

function App() {
  
  let pikachu = Pokedex.getPokemonByName("pikachu")
  .then(function(response) {
    console.log(response)
  })

  return (
    <div className="App">
      <Searchbox />
      <PokeList />
      <PokeDetails />
      
    </div>
  );
}

export default App;
