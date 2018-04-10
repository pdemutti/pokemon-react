import { inputSearchReducer } from './inputSearchReducer';
import { radioFilterReducer } from './radioFilterReducer'
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  inputSearchState: inputSearchReducer,
  radioFilterState: radioFilterReducer
});