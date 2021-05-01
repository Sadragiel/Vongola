import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import userSaga from './user/saga';

function* rootSaga() {
  yield all([
    ...userSaga,
  ]);
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;