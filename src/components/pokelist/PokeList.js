import React, {  } from 'react';
import PokeCell from './pokecell/PokeCell';
import './PokeList.scss';

function PokeList() {
  // Declare a new state variable, which we'll call "count"
 
  return (
    <div className="pokelist">
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </div>
  );
}
export default PokeList;