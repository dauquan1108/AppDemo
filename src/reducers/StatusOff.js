import * as types from '../constants/ActionType';

let statusOff = false;

const StatusOff = (state = statusOff, action) => {
  switch (action.type) {
    case types.CHECK_DONE:
      state = !state;
      return state;
    default:
      return state;
  }
};

export default StatusOff;
