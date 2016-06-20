import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore(preloadedState) {
  // const store = createStore(
  //   // rootReducer,
  //   preloadedState,
  //   applyMiddleware(thunkMiddleware, createLogger())
  // )

  if (module.hot) {
    console.log(module.hot.accept);
    // Enable Webpack hot module replacement for reducers
    // module.hot.accept('../reducers', () => {
    //   const nextRootReducer = require('../reducers').default
    //   store.replaceReducer(nextRootReducer)
    // })
  }

  // return store
}