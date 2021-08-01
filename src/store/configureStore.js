import {createStore, combineReducers} from 'redux';

// component reducers
import DataApp from '../reducers/DataApp';
import StatusOff from '../reducers/StatusOff';
import BlogDate from '../reducers/BlogDate';

const rootReducer = combineReducers({
  DataApp,
  StatusOff,
  BlogDate,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
