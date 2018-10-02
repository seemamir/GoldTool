import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the firstLayout state domain
 */

const selectFirstLayoutDomain = state => state.get('firstLayout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FirstLayout
 */

const makeSelectFirstLayout = () =>
  createSelector(selectFirstLayoutDomain, substate => substate.toJS());

export default makeSelectFirstLayout;
export { selectFirstLayoutDomain };
