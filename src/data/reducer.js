import undo             from './reducers/undo';
import resetBoard       from './reducers/resetBoard';
import changeColour     from './reducers/changeColour';
import updateDifficulty from './reducers/updateDifficulty';

export default (state, action) => {
  switch (action.type) {
    case 'undo':              return undo(state);
    case 'resetBoard':        return resetBoard(state);
    case 'changeColour':      return changeColour(state, action);
    case 'updateDifficulty':  return updateDifficulty(state, action);
    default: return state;
  }
}
