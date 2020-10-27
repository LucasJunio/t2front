import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContentTypeRequest, returnForeignContentTypeRequest } from '../contenttype/actions';

export function* AddContentType({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/contenttype', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContentType() {
  try {
    const response = yield call(api.get, '/contenttype');

    yield put(returnContentTypeRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContentType({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/contenttype', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteContentType({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/contenttype?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignContentType() {
  try {

    const response = yield call(api.get, '/contenttype');

    yield put(returnForeignContentTypeRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@contenttype/ADD_CONTENTTYPE_REQUEST', AddContentType),
    takeLatest('@contenttype/READ_CONTENTTYPE', ReadContentType),
    takeLatest('@contenttype/UPDATE_CONTENTTYPE', UpdateContentType),
    takeLatest('@contenttype/DELETE_CONTENTTYPE', DeleteContentType),
    takeLatest('@contenttype/FOREIGN_CONTENTTYPE', ForeignContentType)
]);
