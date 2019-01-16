import React from 'react';

export default ({ colour, difficulty }) => (
  <React.Fragment>
    <div className={`pipe pipe1 pipeColour${colour}`} />
    <div className={`pipe pipe2 pipeColour${colour}`} />
    <div
      className={`pipe pipe3 pipeColour${colour}`}
      style={{
        width: `
        calc(

          (100% - 6rem)
          / ${difficulty - 1}
          * ${colour + 1}

          - (100% - 6rem)
          / ${difficulty - 1}

          + 6.3rem

        )`
      }}
    />
  </React.Fragment>
)
