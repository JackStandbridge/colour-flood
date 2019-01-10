import generateBoard from './generateBoard';
import calculateNewBoard from './calculateNewBoard';

const initial = {
  difficulty: 5,
  height: 10,
  width: 10,
  colour: 0,
  moves: 0,
};

initial.board = calculateNewBoard(generateBoard(initial.height, initial.width, initial.difficulty), initial.colour);

export default initial;
