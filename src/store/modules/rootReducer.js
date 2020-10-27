import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// Alphabetically organized

import auth from './auth/reducer';
import company from './company/reducer';
import companytype from './companytype/reducer';
import conquest from './conquest/reducer';
import contact from './contact/reducer';
import content from './content/reducer';
import contenttype from './contenttype/reducer';
import contentskill from './contentskill/reducer';
import contentdepartment from './contentdepartment/reducer';
import contentaudience from './contentaudience/reducer';
import department from './department/reducer';
import evaluation from './evaluation/reducer';
import interest from './interest/reducer';
import office from './office/reducer';
import officeskill from './officeskill/reducer';
import quadrant from './quadrant/reducer';
import segment from './segment/reducer';
import skill from './skill/reducer';
import sublevel from './sublevel/reducer';
import sublevelskill from './sublevelskill/reducer';
import audience from './audience/reducer';
import question from './question/reducer';
import questionevaluation from './questionevaluation/reducer';
import user from './user/reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth, company, companytype, contentskill, contentdepartment, contentaudience, conquest, contact, content, contenttype, department, evaluation, interest, office, officeskill, quadrant, segment, skill, sublevel, sublevelskill, audience, user, question, questionevaluation
  })
export default rootReducer;
