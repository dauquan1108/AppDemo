import * as types from '../constants/ActionType';

// export const ON_GET_DATA_ALL = () => {
//   return {
//     type: types.GET_DATA_ALL,
//   };
// };
export const ON_ADD_DATA = value => {
  // debugger;
  return {
    type: types.ADD_DATA,
    payload: value,
  };
};
