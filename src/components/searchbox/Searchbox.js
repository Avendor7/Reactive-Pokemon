import React from 'react';
import PropTypes from "prop-types";

function Searchbox({onChange, selectedPokemon}) {

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        onChange(event.target.value.toLowerCase());
    }

    return (
        <div className="searchbox">
            <label htmlFor="searchbox"/>
            <input id="searchbox" value={selectedPokemon} onChange={handleChange}/>
        </div>
    );
}

Searchbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedPokemon: PropTypes.string.isRequired,
};

export default Searchbox;
