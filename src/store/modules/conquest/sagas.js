import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnConquestRequest, returnForeignConquestRequest } from '../conquest/actions';

export function* AddConquest({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/conquest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadConquest() {
  try {
    let response = yield call(api.get, '/conquest');

    yield put(returnConquestRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateConquest({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/conquest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteConquest({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/conquest?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignConquest() {
  try {

    const response = yield call(api.get, '/conquest/foreign');

    yield put(returnForeignConquestRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@conquest/ADD_CONQUEST_REQUEST', AddConquest),
    takeLatest('@conquest/READ_CONQUEST', ReadConquest),
    takeLatest('@conquest/UPDATE_CONQUEST', UpdateConquest),
    takeLatest('@conquest/DELETE_CONQUEST', DeleteConquest),
    takeLatest('@conquest/FOREIGN_CONQUEST', ForeignConquest)
]);
