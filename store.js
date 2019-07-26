import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from './reducers';

const exampleInitialState = {
}

export function initializeStore (initialState = exampleInitialState) {
  const middleware = [thunk];
  return createStore(
    reducers,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}