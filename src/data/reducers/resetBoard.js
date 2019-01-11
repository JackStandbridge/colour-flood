import generateBoard from '../generateBoard';
import calculateNewBoard from '../calculateNewBoard';
import initial from '../initial';

const state = state => ({
  ...initial,
  board: calculateNewBoard(
    generateBoard(
      state.height,
      state.width,
      state.difficulty
    ), 0
  ),
  bestScore: state.bestScore,
  colour: 0
})

export default state;
