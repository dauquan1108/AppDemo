import * as types from '../constants/ActionType';

let data = [
  {id: 1, names: 'quan1'},
  {id: 2, names: 'quan2'},
  {id: 3, names: 'quan3'},
];

const DataApp = (state = data, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      const value = action.payload;
      let id = state.length + 1;
      const ids = String(id);
      return [...state, {id: ids, names: value}];
    default:
      return [...state];
  }
};
export default DataApp;
