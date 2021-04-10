import React from 'react';
import PropTypes from "prop-types";

import './PokeCell.scss';

function PokeCell({pokemon}) {
    return (
        <button className="pokeCell">{pokemon}</button>
    );
}

PokeCell.propTypes = {
    pokemon: PropTypes.string.isRequired,
};

export default PokeCell;
