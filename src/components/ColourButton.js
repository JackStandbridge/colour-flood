import React from 'react';


export default ({ handleClick, colour, incrementMoves }) => (
  <button
    onClick={ () => {handleClick(); incrementMoves();} }
    className={`button colour${colour}`}
  >
  </button>
)
