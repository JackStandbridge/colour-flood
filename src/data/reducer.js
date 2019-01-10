import changeColour from './reducers/changeColour';

export default (state, action) => {
  switch (action.type) {
    case 'changeColour': return changeColour(state, action);
    default: return state;
  }
}
