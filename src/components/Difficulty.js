import React from 'react';

export default ({ handleDifficulty, difficulty }) => (
  <div className='difficulty'>
    <h1>Colours:</h1>

    <button
      onClick={ () => handleDifficulty(4) }
      disabled={ difficulty === 4 && 'disabled'}
    >
      4
    </button>

    <button
      onClick={ () => handleDifficulty(5) }
      disabled={ difficulty === 5 && 'disabled'}
    >
      5
    </button>

    <button
      onClick={ () => handleDifficulty(6) }
      disabled={ difficulty === 6 && 'disabled'}
    >
      6
    </button>
  </div>
)
