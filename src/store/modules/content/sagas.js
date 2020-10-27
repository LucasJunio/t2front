import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContentRequest } from '../content/actions';

export function* AddContent({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/content', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContent() {
  try {
    let response = yield call(api.get, '/content');

    yield put(returnContentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContent({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/content', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* DeleteContent({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/content?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignContent() {
  try {

    const response = yield call(api.get, '/content/foreign');

    yield put(returnContentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@content/ADD_CONTENT_REQUEST', AddContent),
    takeLatest('@content/READ_CONTENT', ReadContent),
    takeLatest('@content/UPDATE_CONTENT', UpdateContent),
    takeLatest('@content/DELETE_CONTENT', DeleteContent),
    takeLatest('@content/FOREIGN_CONTENT', ForeignContent)
]);
