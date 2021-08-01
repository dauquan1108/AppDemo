import * as types from '../constants/ActionType';

export const ON_ADD_DATA = value => {
  return {
    type: types.ADD_DATA,
    payload: value,
  };
};

export const ON_UPDATE = (id, value) => {
  return {
    type: types.UPDATE,
    payload: {
      id,
      value,
    },
  };
};

export const ON_UPDATE_STATUS = id => {
  return {
    type: types.UPDATE_STATUS,
    payload: {
      id,
    },
  };
};

export const ON_DELETE_ITEM = id => {
  return {
    type: types.DELETE_ITEM,
    payload: id,
  };
};

export const ON_CHECK_DONE = () => {
  return {
    type: types.CHECK_DONE,
  };
};
