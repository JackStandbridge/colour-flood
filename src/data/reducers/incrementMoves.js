export default state => ({
  ...state,
  moves: state.moves + 1,
  bestScore: (state.board.every(row => row.every(square => square === 'X')) && state.moves + 1 < state.bestScore ? state.moves + 1 : state.bestScore)
})

