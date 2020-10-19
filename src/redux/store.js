import { createStore, combineReducers  } from 'redux';
import user from '../reducers/user';
import dependencies from '../reducers/dependency';

const reducer = combineReducers({
  user,
  dependencies
});

const store = createStore(reducer)

export default store;