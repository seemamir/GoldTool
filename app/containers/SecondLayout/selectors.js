import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the secondLayout state domain
 */

const selectSecondLayoutDomain = state =>
  state.get('secondLayout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SecondLayout
 */

const makeSelectSecondLayout = () =>
  createSelector(selectSecondLayoutDomain, substate => substate.toJS());

export default makeSelectSecondLayout;
export { selectSecondLayoutDomain };
