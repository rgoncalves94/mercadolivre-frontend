import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import searchReducer from './modules/combineReducers';

const sagaMiddleware = createSagaMiddleware()

const middlewares = process.env.NODE_ENV === 'production' 
    ? applyMiddleware(sagaMiddleware) 
    : compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const Store = createStore(searchReducer, middlewares);

sagaMiddleware.run(sagas)