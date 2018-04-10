import { INPUT_SEARCH_VALUE } from '../actions/actionTypes';

const initialState = {
  description: ''
};
export const inputSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_SEARCH_VALUE:
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}