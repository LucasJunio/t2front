import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnSublevelRequest, returnForeignSublevelRequest } from '../sublevel/actions';

export function* AddSublevel({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/sublevel', payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadSublevel() {
  try {
    let response = yield call(api.get, '/sublevel');

    yield put(returnSublevelRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateSublevel({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/sublevel`, payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteSublevel({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/sublevel?id=${id}`);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignSublevel() {
  try {

    const response = yield call(api.get, '/sublevel/foreign');

    yield put(returnForeignSublevelRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@sublevel/ADD_SUBLEVEL_REQUEST', AddSublevel),
    takeLatest('@sublevel/READ_SUBLEVEL', ReadSublevel),
    takeLatest('@sublevel/UPDATE_SUBLEVEL', UpdateSublevel),
    takeLatest('@sublevel/DELETE_SUBLEVEL', DeleteSublevel),
    takeLatest('@sublevel/FOREIGN_SUBLEVEL', ForeignSublevel)
]);
