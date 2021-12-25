import React from 'react';
import ReactDOM from 'react-dom';
import MainRoutes from './MainRoutes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore( rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
    <MainRoutes />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
