import React, {  } from 'react';

function Searchbox(props) {

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value.toLowerCase());
  }

  return (
    <div className="searchbox">
        <label htmlFor="searchbox"></label>
        <input id="searchbox" value={props.selectedPokemon} onChange={handleChange}></input>
    </div>
  );
}
export default Searchbox;