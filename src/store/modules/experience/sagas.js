import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnExperienceRequest} from '../experience/actions';

export function* AddExperience({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/experience', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadExperience() {
  try {

    let response = yield call(api.get, '/experience');

    yield put(returnExperienceRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateExperience({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/experience', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteExperience({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/experience?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@experience/ADD_EXPERIENCE_REQUEST', AddExperience),
    takeLatest('@experience/READ_EXPERIENCE', ReadExperience),
    takeLatest('@experience/UPDATE_EXPERIENCE', UpdateExperience),
    takeLatest('@experience/DELETE_EXPERIENCE', DeleteExperience)
]);
