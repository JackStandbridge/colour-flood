import generateBoard from '../generateBoard';
import calculateNewBoard from '../calculateNewBoard';
import initial from '../initial';

const state = (state, action) => ({
  ...initial,
  difficulty: action.difficulty,
  board: calculateNewBoard(
    generateBoard(
      state.height,
      state.width,
      action.difficulty
    ), 0 // always start with colour 0 as first square
  ),
  bestScore: state.bestScore,
  colour: 0
})

export default state;
