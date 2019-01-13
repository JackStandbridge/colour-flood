export default state => ({
  ...state,
  moves: state.moves + 1,
  bestScore: {
    ...state.bestScore,
    // set the current difficulty level's best
    // score if all squares have been changed.
    [state.difficulty] :
      state.board.every(row => row.every(square => square === 'X')) &&
      state.moves + 1 < state.bestScore[state.difficulty] ?
      state.moves + 1 : state.bestScore[state.difficulty]
  },
})

