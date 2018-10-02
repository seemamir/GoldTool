import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the thirdLayout state domain
 */

const selectThirdLayoutDomain = state => state.get('thirdLayout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ThirdLayout
 */

const makeSelectThirdLayout = () =>
  createSelector(selectThirdLayoutDomain, substate => substate.toJS());

export default makeSelectThirdLayout;
export { selectThirdLayoutDomain };
