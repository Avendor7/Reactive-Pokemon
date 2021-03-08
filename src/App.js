import './App.css';
import PokeDetails from './components/pokedetails/PokeDetails';
import PokeList from './components/pokelist/PokeList';

function App() {
  return (
    <div className="App">
      <PokeDetails />
      <PokeList />
    </div>
  );
}

export default App;
