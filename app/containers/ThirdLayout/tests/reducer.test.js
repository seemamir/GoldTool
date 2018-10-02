import { fromJS } from 'immutable';
import thirdLayoutReducer from '../reducer';

describe('thirdLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(thirdLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
