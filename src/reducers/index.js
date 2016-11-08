import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import list from './list';
import labs from './labs';

const rootReducer = combineReducers({
  labs,
  list,
  routing
});

export default rootReducer;
