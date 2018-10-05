/*
 *
 * Header actions
 *
 */

import { DEFAULT_ACTION, INFLATION_VALUE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function inflationValue(payload) {
  return {
    type: INFLATION_VALUE,
    payload,
  };
}
