import { all } from 'redux-saga/effects';

// Alphabetically organized

import auth from './auth/sagas';
import evaluation from './evaluation/sagas';
import interest from './interest/sagas';
import skill from './skill/sagas';
import privacy from './privacy/sagas';
import question from './question/sagas';
import questionevaluation from './questionevaluation/sagas';
import userinterest from './userinterest/sagas';

export default function* rootSaga() {
  return yield all([
    auth, evaluation, interest, skill, privacy, question, questionevaluation, userinterest
  ]);
}
