import { combineReducers } from 'redux';
import { checkoutReducer } from './checkout';

export const reducers = combineReducers({
  checkoutState: checkoutReducer
});