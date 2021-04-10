import React from 'react';

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

export default Searchbox;
