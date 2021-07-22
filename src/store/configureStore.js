import {createStore, combineReducers} from 'redux';

// component reducers
import DataApp from '../reducers/DataApp';

// npm install --save redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  DataApp,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
