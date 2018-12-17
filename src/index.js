import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';   
import createSagaMiddleware from 'redux-saga'
import reduxStore from './store';
import sagas from './sagas';
import App from './containers/App';

import './sass/_app.scss'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reduxStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
store.runSaga = sagaMiddleware.run;
sagas.map(store.runSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
