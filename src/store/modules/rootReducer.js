import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// Alphabetically organized

import auth from './auth/reducer';
import user from './user/reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth, user
  })
export default rootReducer;
