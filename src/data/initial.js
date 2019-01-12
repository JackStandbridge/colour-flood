import generateBoard from './generateBoard';
import calculateNewBoard from './calculateNewBoard';

const initial = {
  difficulty: 4,
  height: 10,
  width: 10,
  colour: 0,
  moves: 0,
  bestScore: Infinity,
};

// pipe generateBoard through calculateNewBoard
// to fill in X's where colours just happend to
// be adjacent from start.
initial.board = calculateNewBoard(
  generateBoard(
    initial.height,
    initial.width,
    initial.difficulty
  ), initial.colour
);

export default initial;
