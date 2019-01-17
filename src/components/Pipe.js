import React from 'react';

export default ({ colour, difficulty }) => (
  <React.Fragment>
    <div className={`pipe pipe0 pipeColour${colour}`} />
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

          + 6.5rem

        )`
      }}
    />
    <div
      className={`pipe pipe4 pipeColour${colour}`}
      style={{
        left: `
        calc(

          (100% - 6rem)
          / ${difficulty - 1}
          * ${colour + 1}

          - (100% - 6rem)
          / ${difficulty - 1}

          + 2.5rem
        )`
      }}
    />
  </React.Fragment>
)
