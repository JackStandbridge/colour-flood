import changeColour from './reducers/changeColour';
import incrementMoves from './reducers/incrementMoves';
import resetBoard from './reducers/resetBoard';

export default (state, action) => {
  switch (action.type) {
    case 'changeColour': return changeColour(state, action);
    case 'incrementMoves': return incrementMoves(state);
    case 'resetBoard': return resetBoard(state);
    default: return state;
  }
}
