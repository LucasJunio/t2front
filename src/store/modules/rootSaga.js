import { all } from 'redux-saga/effects';

// Alphabetically organized

import auth from './auth/sagas';
import evaluation from './evaluation/sagas';
import experience from "./experience/sagas";
import extra from "./extra/sagas";
import formation from './formation/sagas';
import interest from './interest/sagas';
import skill from './skill/sagas';
import privacy from './privacy/sagas';
import question from './question/sagas';
import questionevaluation from './questionevaluation/sagas';
import userinterest from './userinterest/sagas';


export default function* rootSaga() {
  return yield all([
    auth, evaluation, extra, experience, formation, interest, skill, privacy, question, questionevaluation, userinterest
  ]);
}
