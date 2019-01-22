import React from 'react';

export default ({ resetBoard, undo }) => (
  <React.Fragment>
    <button onClick={ resetBoard } className='reset'>Reset</button>
    <button onClick={ undo } className='undo'>Undo</button>
  </React.Fragment>
)
