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
    ), 0 // always start with colour 0 as first square
  ),
  bestScore: state.bestScore,
  colour: 0,
  difficulty: state.difficulty
})

export default state;
