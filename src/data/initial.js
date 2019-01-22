import generateBoard from './generateBoard';
import calculateNewBoard from './calculateNewBoard';

const initial = {
  difficulty: 4,
  height: 10,
  width: 10,
  colour: 0,
  moves: 0,
  history: [],
  bestScore: {
    4: Infinity,
    5: Infinity,
    6: Infinity,
  },
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
