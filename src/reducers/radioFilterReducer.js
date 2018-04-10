import { RADIO_FILTER_VALUE } from '../actions/actionTypes';

const initialState = {
  selectedOption: 'pokemon'
};

export const radioFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case RADIO_FILTER_VALUE:
      return {
        ...state,
        selectedOption: action.selectedOption
      };
    default:
      return state;
  }
}