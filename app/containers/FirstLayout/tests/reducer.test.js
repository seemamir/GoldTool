import { fromJS } from 'immutable';
import firstLayoutReducer from '../reducer';

describe('firstLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(firstLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
