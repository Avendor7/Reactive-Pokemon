import React, {  } from 'react';
import PokeCell from './pokecell/PokeCell';
import './PokeList.scss';

function PokeList(props) {
  
  let raochu = props.mainPokedex.getPokemonByName("raichu")
  .then(function(response) {
    console.log(response)
  })
  return (
    <div className="pokelist">
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </div>
  );
}
export default PokeList;