import { all } from 'redux-saga/effects';

// Alphabetically organized

import auth from './auth/sagas';
import company from './company/sagas';
import contact from './contact/sagas';
import content from './content/sagas';
import companytype from './companytype/sagas';
import conquest from './conquest/sagas';
import contenttype from './contenttype/sagas';
import contentskill from './contentskill/sagas';
import contentdepartment from './contentdepartment/sagas';
import contentaudience from './contentaudience/sagas';
import department from './department/sagas';
import evaluation from './evaluation/sagas';
import interest from './interest/sagas';
import office from './office/sagas';
import officeskill from './officeskill/sagas';
import quadrant from './quadrant/sagas';
import segment from './segment/sagas';
import skill from './skill/sagas';
import sublevel from './sublevel/sagas';
import sublevelskill from './sublevelskill/sagas';
import audience from './audience/sagas';
import user from './user/sagas';
import question from './question/sagas';
import questionevaluation from './questionevaluation/sagas';

export default function* rootSaga() {
  return yield all([
    auth, company, companytype, contentskill, contentdepartment, contentaudience, conquest, contact, content, contenttype, department, evaluation, interest, office, officeskill, quadrant, segment, skill, sublevel, sublevelskill, audience, user, question, questionevaluation
  ]);
}
