import './App.scss';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';

function App() {
  return (
    <div className="App">
      <PokeList />
      <PokeDetails />
    </div>
  );
}

export default App;
