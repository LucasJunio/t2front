import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// Alphabetically organized

import auth from './auth/reducer';
import vehicles from './vehicles/reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth, vehicles
  })
export default rootReducer;
