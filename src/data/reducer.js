import resetBoard       from './reducers/resetBoard';
import changeColour     from './reducers/changeColour';
import incrementMoves   from './reducers/incrementMoves';
import updateDifficulty from './reducers/updateDifficulty';

export default (state, action) => {
  switch (action.type) {
    case 'resetBoard':        return resetBoard(state);
    case 'changeColour':      return changeColour(state, action);
    case 'incrementMoves':    return incrementMoves(state);
    case 'updateDifficulty':  return updateDifficulty(state, action);
    default: return state;
  }
}
