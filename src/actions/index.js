import { INPUT_SEARCH_VALUE, RADIO_FILTER_VALUE } from './actionTypes';

export const keyPressInput = value => ({
  type: INPUT_SEARCH_VALUE,
  description: value
});

export const selectRadio = value => ({
  type: RADIO_FILTER_VALUE,
  selectedOption: value
});