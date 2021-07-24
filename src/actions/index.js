import * as types from '../constants/ActionType';

export const ON_ADD_DATA = value => {
  return {
    type: types.ADD_DATA,
    payload: value,
  };
};
