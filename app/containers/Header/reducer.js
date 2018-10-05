/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, INFLATION_VALUE } from './constants';

export const initialState = fromJS({
  inflation: '',
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case INFLATION_VALUE:
      return state.set('inflation', action.payload);
    default:
      return state;
  }
}

export default headerReducer;
