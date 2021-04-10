import React from 'react';

import './PokeCell.scss';

function PokeCell({pokemon}) {
    return (
        <button className="pokeCell">{pokemon}</button>
    );
}

export default PokeCell;
