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
  return (
    <div className="App">
      <Searchbox />
      <PokeList Dex={Pokedex}/>
      <PokeDetails />
      
    </div>
  );
}

export default App;
