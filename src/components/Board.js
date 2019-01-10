import React from 'react';

export default ({ board, colour }) => (
  <div className='board'>
    {
      board.map((row, index) => (

        <div
          key={index}
          className='row'
        >

          {
            row.map((square, index) => (
              <div
                key={index}
                // set controlled squares (represented by an X in state)
                // to be the colour that the user has selected.
                className={`square colour${ typeof square === 'number' ? square : colour }`}
              />
            ))
          }

        </div>

      ))
    }
  </div>
)

