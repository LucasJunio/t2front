import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnPrivacyRequest} from '../privacy/actions';

export function* AddPrivacy({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/privacy', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadPrivacy() {
  try {

    let response = yield call(api.get, '/privacy');

    yield put(returnPrivacyRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdatePrivacy({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/privacy', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeletePrivacy({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/privacy?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@privacy/ADD_PRIVACY_REQUEST', AddPrivacy),
    takeLatest('@privacy/READ_PRIVACY', ReadPrivacy),
    takeLatest('@privacy/UPDATE_PRIVACY', UpdatePrivacy),
    takeLatest('@privacy/DELETE_PRIVACY', DeletePrivacy)
]);
