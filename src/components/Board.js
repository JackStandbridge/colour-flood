import React from 'react';

export default ({ board, playerColour, handleColourChange, incrementMoves }) => (
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
                onClick={ () => {
                  handleColourChange(square === 'X' ? playerColour : square)
                  if (playerColour !== square && square !== 'X') {
                    incrementMoves()
                  }
                }}
                // set controlled squares (represented by an X in state)
                // to be the colour that the user has selected.
                className={`square colour${ typeof square === 'number' ? square : playerColour }`}
              />
            ))
          }

        </div>

      ))
    }
  </div>
)

