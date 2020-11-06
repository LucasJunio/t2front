import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnExtraRequest} from '../extra/actions';

export function* AddExtra({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/extra', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadExtra() {
  try {

    let response = yield call(api.get, '/extra');

    yield put(returnExtraRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateExtra({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/extra', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteExtra({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/extra?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@extra/ADD_EXTRA_REQUEST', AddExtra),
    takeLatest('@extra/READ_EXTRA', ReadExtra),
    takeLatest('@extra/UPDATE_EXTRA', UpdateExtra),
    takeLatest('@extra/DELETE_EXTRA', DeleteExtra)
]);
