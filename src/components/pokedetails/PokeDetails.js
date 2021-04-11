import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import pokedex from '../../PokeDex';

import './PokeDetails.scss';

function PokeDetails({selectedPokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    //whenever a new selected pokemon comes in from the searchbox and its blank it breaks this
    //set it as the old one until a new pokemon has been sucessfully found
    if (selectedPokemon === ""){
        selectedPokemon = pokemonDetails.name;
    }

    useEffect(() => {
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
