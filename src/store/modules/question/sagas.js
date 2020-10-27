import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnQuestionRequest, returnForeignQuestionRequest } from '../question/actions';

export function* AddQuestion({ payload, resolve }) {
  try {
    console.log('add question request payload', payload);

    const response = yield call(api.post, '/question', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadQuestion() {
  try {
    let response = yield call(api.get, '/question');

    yield put(returnQuestionRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateQuestion({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/question', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteQuestion({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/question?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignQuestion() {
  try {

    const response = yield call(api.get, '/question/foreign');

    yield put(returnForeignQuestionRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@question/ADD_QUESTION_REQUEST', AddQuestion),
    takeLatest('@question/READ_QUESTION', ReadQuestion),
    takeLatest('@question/UPDATE_QUESTION', UpdateQuestion),
    takeLatest('@question/DELETE_QUESTION', DeleteQuestion),
    takeLatest('@question/FOREIGN_QUESTION', ForeignQuestion)
]);
