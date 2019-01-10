import changeColour from './reducers/changeColour';
import incrementMoves from './reducers/incrementMoves';

export default (state, action) => {
  switch (action.type) {
    case 'changeColour': return changeColour(state, action);
    case 'incrementMoves': return incrementMoves(state);
    default: return state;
  }
}
