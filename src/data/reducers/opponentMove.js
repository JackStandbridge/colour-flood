import calculateNewBoard from '../calculateNewBoard';
import calculateTerritory from '../calculateTerritory';

// const colours = {
//   0: 'red',
//   1: 'green',
//   2: 'blue',
//   3: 'yellow',
//   4: 'cyan',
//   5: 'magenta',
// }

export default state => {

  // store the best move to take here
  let bestNewScore = 0;
  let bestColour;

  // check each colour and see if it gains more
  // territory than previous best.
  for (let i = state.difficulty; i--;) {
    let score = calculateTerritory(calculateNewBoard(state.board, i));
    if (score > bestNewScore) {
      bestNewScore = score;
      bestColour = i;
    }
  }

  const newBoard = calculateNewBoard(state.board, bestColour);

  return ({
    ...state,
    colour: bestColour,
    board: newBoard,
    moves: state.moves + 1,

    // add previous board to history for undo purposes
    history: [
      ...state.history,
      {
        board: [...state.board],
        colour: state.colour,
      }
    ],

    bestScore: {
      ...state.bestScore,
      // set the current difficulty level's best
      // score if all squares have been changed.
      [state.difficulty] :
        newBoard.every(row => row.every(square => square === 'X')) &&
        state.moves + 1 < state.bestScore[state.difficulty] ?
        state.moves + 1 : state.bestScore[state.difficulty]
    },
  })
};
