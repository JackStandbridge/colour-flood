import React from 'react';
import ColourButton from '../containers/ColourButtonContainer';

export default ({ difficulty, handleColourChange }) => (
  <div className='controls-container'>
    {
      Array(difficulty)
      .fill('')
      .map((colour, index) => (
        <ColourButton
          key={ index }
          handleClick={ () => handleColourChange(index) }
          colour={ index }
        />
      ))
    }
  </div>
)
