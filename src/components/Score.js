import React from 'react';
import ResetButton from '../containers/ResetButtonContainer';
import Difficulty from '../containers/DifficultyContainer';

export default ({ moves, bestScore, difficulty }) => {
  const best = bestScore[difficulty];
  return (
    <aside>
      <h1>Moves:</h1>
      <div className='score'>{ moves < 10 ? `0${moves}` : moves }</div>
      <h1>Best:</h1>
      <div className='score'>{ best === Infinity ? '-' : best < 10 ? `0${best}` : best }</div>
      <ResetButton />
      <Difficulty />
    </aside>
  )
}
