import React from 'react';


export default ({ handleClick, colour }) => (
  <button
    onClick={ handleClick }
    className={`button colour${colour}`}
  >
  </button>
)
