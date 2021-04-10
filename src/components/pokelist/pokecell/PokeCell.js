import React from 'react';

import './PokeCell.scss';

function PokeCell(props) {
  //console.log(props.pokemon);
  return (
    <button className="pokeCell">{props.pokemon}</button>
  );
}

export default PokeCell;
