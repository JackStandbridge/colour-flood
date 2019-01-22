import calculateNewBoard from '../calculateNewBoard';

export default (state, action) => {

  if (action.colour === state.colour) { return state }

  const newBoard = calculateNewBoard(state.board, action.colour);

  return ({
    ...state,
    colour: action.colour,
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
}
