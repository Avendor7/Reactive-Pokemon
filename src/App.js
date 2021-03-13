import './App.scss';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';
import Searchbox from './components/searchbox/Searchbox';
const P = require("pokeapi-js-wrapper");
const Pokedex = new P.Pokedex();

function App() {
  return (
    <div className="App">
      <Searchbox />
      <PokeList mainPokedex={Pokedex}/>
      <PokeDetails />
      
    </div>
  );
}

export default App;
