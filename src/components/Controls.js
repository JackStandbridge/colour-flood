import React from 'react';
import ColourButton from './ColourButton';

export default ({ difficulty, handleColourChange }) => (
  <div className='controls-container'>
    {
      Array(difficulty)
      .fill('')
      .map((colour, index) => {
        return (
          <ColourButton
            key={ index }
            handleClick={ () => handleColourChange(index) }
            colour={ index }
          />
        )
      })
    }
  </div>
)

