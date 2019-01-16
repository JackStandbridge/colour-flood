import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import initial from './data/initial';
import reducer from './data/reducer';

import Board from './containers/BoardContainer';
import Controls from './containers/ControlsContainer';
import Score from './containers/ScoreContainer';
import Pipe from './containers/PipeContainer';

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => (
  <Provider store={ store }>
    <main>
      <Board />
      <Controls />
      <Pipe />
    </main>
    <Score />
  </Provider>
);
