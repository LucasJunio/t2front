import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnDenunciationRequest} from '../denunciation/actions';

export function* AddDenunciation({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/denunciation', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadDenunciation() {
  try {

    let response = yield call(api.get, '/denunciation');

    yield put(returnDenunciationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateDenunciation({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/denunciation', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteDenunciation({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/denunciation?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@denunciation/ADD_DENUNCIATION_REQUEST', AddDenunciation),
    takeLatest('@denunciation/READ_DENUNCIATION', ReadDenunciation),
    takeLatest('@denunciation/UPDATE_DENUNCIATION', UpdateDenunciation),
    takeLatest('@denunciation/DELETE_DENUNCIATION', DeleteDenunciation)
]);