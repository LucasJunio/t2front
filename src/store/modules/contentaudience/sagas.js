import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContentAudienceRequest } from './actions';

export function* AddContentAudience({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/audience-content', payload);

    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContentAudience({payload, resolve}) {
  try {
    let response = yield call(api.get, `/audience-content?id_content=${payload}`);

    yield put(returnContentAudienceRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContentAudience({ payload, resolve }) {
  try {
    // const { name, id_audience, id } = payload;

    const response = yield call(api.put, '/audience-content', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteContentAudience({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/audience-content?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@contentaudience/ADD_CONTENT_AUDIENCE_REQUEST', AddContentAudience),
    takeLatest('@contentaudience/READ_CONTENT_AUDIENCE', ReadContentAudience),
    takeLatest('@contentaudience/UPDATE_CONTENT_AUDIENCE', UpdateContentAudience),
    takeLatest('@contentaudience/DELETE_CONTENT_AUDIENCE', DeleteContentAudience),
]);
