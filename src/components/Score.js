import React from 'react';

export default ({ moves, bestScore }) => (
  <aside>
    <h1>Moves:</h1>
    <div className='score'>{ moves < 10 ? `0${moves}` : moves }</div>
    <h1>Best:</h1>
    <div className='score'>{ bestScore === Infinity ? '-' : bestScore }</div>
  </aside>
)
