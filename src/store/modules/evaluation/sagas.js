import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnEvaluationRequest, returnForeignEvaluationRequest } from '../evaluation/actions';

export function* AddEvaluation({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/evaluation', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadEvaluation() {
  try {
    let response = yield call(api.get, '/evaluation');

    yield put(returnEvaluationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateEvaluation({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/evaluation', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteEvaluation({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/evaluation?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignEvaluation() {
  try {

    const response = yield call(api.get, '/evaluation/foreign');

    yield put(returnForeignEvaluationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@evaluation/ADD_EVALUATION_REQUEST', AddEvaluation),
    takeLatest('@evaluation/READ_EVALUATION', ReadEvaluation),
    takeLatest('@evaluation/UPDATE_EVALUATION', UpdateEvaluation),
    takeLatest('@evaluation/DELETE_EVALUATION', DeleteEvaluation),
    takeLatest('@evaluation/FOREIGN_EVALUATION', ForeignEvaluation)
]);
