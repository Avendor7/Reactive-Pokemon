import React from 'react';
import PropTypes from "prop-types";

import './PokeCell.scss';

function PokeCell({pokemon, index}) {
    console.log(index);
    return (
        <section>
            <a href='google.ca' className="pokeCell">
                <img alt={pokemon.name} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
                {pokemon.name}
            </a>
        </section>
    );
}

PokeCell.propTypes = {
    pokemon: PropTypes.string.isRequired,
    index: PropTypes.string,
};

export default PokeCell;
