import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers/parks-reducer';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);