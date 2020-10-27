import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnQuestionEvaluationRequest } from './actions';

export function* AddQuestionEvaluation({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/question-evaluation', payload);

    console.log(response.data.rows)
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadQuestionEvaluation({payload, resolve}) {
  try {
    let response = yield call(api.get, `/question-evaluation?id_evaluation=${payload}`);

    yield put(returnQuestionEvaluationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateQuestionEvaluation({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/question-evaluation`, payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteQuestionEvaluation({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/question-evaluation?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@questionevaluation/ADD_QUESTION_EVALUATION_REQUEST', AddQuestionEvaluation),
    takeLatest('@questionevaluation/READ_QUESTION_EVALUATION', ReadQuestionEvaluation),
    takeLatest('@questionevaluation/UPDATE_QUESTION_EVALUATION', UpdateQuestionEvaluation),
    takeLatest('@questionevaluation/DELETE_QUESTION_EVALUATION', DeleteQuestionEvaluation)
]);
