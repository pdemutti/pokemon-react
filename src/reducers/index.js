import { inputSearchReducer } from './inputSearchReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  inputSearchState: inputSearchReducer
});