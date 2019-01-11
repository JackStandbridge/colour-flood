import React from 'react';
import ResetButton from '../containers/ResetButtonContainer';

export default ({ moves, bestScore }) => (
  <aside>
    <h1>Moves:</h1>
    <div className='score'>{ moves < 10 ? `0${moves}` : moves }</div>
    <h1>Best:</h1>
    <div className='score'>{ bestScore === Infinity ? '-' : bestScore < 10 ? `0${bestScore}` : bestScore }</div>
    <ResetButton />
  </aside>
)
