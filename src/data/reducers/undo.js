export default state => !state.history.length ? state : ({
  ...state,
  moves: state.moves - 1,
  board: [...state.history].pop().board,
  colour: [...state.history].pop().colour,
  history: [...state.history].slice(0, state.history.length - 1)
})
