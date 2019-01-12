import React from 'react';

export default ({ handleDifficulty }) => (
  <div className='difficulty'>
    <h1>Level</h1>
    <button onClick={ () => handleDifficulty(4) }>4</button>
    <button onClick={ () => handleDifficulty(5) }>5</button>
    <button onClick={ () => handleDifficulty(6) }>6</button>
  </div>
)
