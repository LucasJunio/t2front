import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// Alphabetically organized

import auth from './auth/reducer';
import evaluation from './evaluation/reducer';
import interest from './interest/reducer';
import skill from './skill/reducer';
import privacy from './privacy/reducer';
import question from './question/reducer';
import questionevaluation from './questionevaluation/reducer';


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth, evaluation, interest, skill, privacy, question, questionevaluation
  })
export default rootReducer;
