import * as types from '../constants/ActionType';

let data = [
  {id: 1, names: 'quan1'},
  {id: 2, names: 'quan2'},
  {id: 3, names: 'quan3'},
];

const DataApp = (state = data, action) => {
  switch (action.types) {
    case types.GET_DATA_ALL:
      return [...state];
    case types.ADD_DATA:
      debugger;
      console.log({action});
      return [...state];
    default:
      return [...state];
  }
};
export default DataApp;
