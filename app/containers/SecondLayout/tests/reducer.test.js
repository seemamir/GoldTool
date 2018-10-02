import { fromJS } from 'immutable';
import secondLayoutReducer from '../reducer';

describe('secondLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(secondLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
