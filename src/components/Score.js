import React from 'react';

export default ({ moves }) => (
  <aside>
    <h1>Moves:</h1>
    <div className='score'>{ moves < 10 ? `0${moves}` : moves }</div>
  </aside>
)
