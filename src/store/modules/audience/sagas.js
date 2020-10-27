import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnAudienceRequest } from './actions';

export function* AddAudience({ payload, resolve }) {
  try {
    
    const response = yield call(api.post, '/audience', payload);

    console.log(response.data);

    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadAudience() {
  try {
    const response = yield call(api.get, '/audience');

    yield put(returnAudienceRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateAudience({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/audience', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteAudience({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/audience?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@audience/ADD_AUDIENCE_REQUEST', AddAudience),
    takeLatest('@audience/READ_AUDIENCE', ReadAudience),
    takeLatest('@audience/UPDATE_AUDIENCE', UpdateAudience),
    takeLatest('@audience/DELETE_AUDIENCE', DeleteAudience)
]);
