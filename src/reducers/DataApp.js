import * as types from '../constants/ActionType';
import uuid from 'react-native-uuid';

let data = [];

const DataApp = (state = data, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      const value = action.payload;
      return [{id: uuid.v4(), names: value, status: false}, ...state];
    case types.UPDATE:
      const idUpdate = action.payload.id;
      const valueUpdate = action.payload.value;
      state.forEach(item => {
        if (item.id === idUpdate) {
          item.names = valueUpdate;
        }
      });
      return [...state];
    case types.UPDATE_STATUS:
      const idStatus = action.payload.id;
      state.forEach(item => {
        if (item.id === idStatus) {
          item.status = !item.status;
        }
      });
      return [...state];
    case types.DELETE_ITEM:
      const id = action.payload;
      const deleteItem = state.filter(todo => todo.id !== id);
      return deleteItem;
    default:
      return [...state];
  }
};
export default DataApp;
