import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnFormationRequest} from '../formation/actions';

export function* AddFormation({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/formation', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadFormation() {
  try {

    let response = yield call(api.get, '/formation');

    yield put(returnFormationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateFormation({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/formation', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteFormation({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/formation?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@formation/ADD_FORMATION_REQUEST', AddFormation),
    takeLatest('@formation/READ_FORMATION', ReadFormation),
    takeLatest('@formation/UPDATE_FORMATION', UpdateFormation),
    takeLatest('@formation/DELETE_FORMATION', DeleteFormation)
]);
