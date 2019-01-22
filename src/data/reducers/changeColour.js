import calculateNewBoard from '../calculateNewBoard';

export default (state, action) => ({
  ...state,
  colour: action.colour,
  board: calculateNewBoard(state.board, action.colour),
  history: [
    ...state.history,
    {
      board: [...state.board],
      colour: state.colour,
    }
  ],
})
