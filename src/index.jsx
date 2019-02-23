/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import createDebug from 'debug';

import App from './components/App';

const log = createDebug('my-app');

const { setState } = React.Component.prototype;
React.Component.prototype.setState = function setStateWithLogs(...args) {
  const [nextState] = args;
  log('state', this.state);
  log('nextState', typeof nextState === 'function' ? nextState(this.state) : nextState);
  return setState.apply(this, args);
};

ReactDOM.render(<App />, document.getElementById('root'));
