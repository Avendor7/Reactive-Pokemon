import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import pokedex from '../../PokeDex';

import './PokeDetails.scss';

function PokeDetails({selectedPokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    
    useEffect(() => {
        if (!selectedPokemon) { return; }
        pokedex.getPokemonByName(selectedPokemon).then(function (response) {
            setPokemonDetails(response);
            console.log('response ' + response.name);
        }).catch((error) => console.log(error));
    }, [selectedPokemon]);

    return (
        <div className="pokedetails">
            <p>{selectedPokemon}</p>
            <p>{pokemonDetails.name}</p>
        </div>
    );
}

PokeDetails.propTypes = {
    selectedPokemon: PropTypes.string,
};


export default PokeDetails;
