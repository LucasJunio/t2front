import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnResultRepresentationalRequest} from '../resultrepresentational/actions';

export function* AddResultRepresentational({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/resultrepresentational', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadResultRepresentational() {
  try {

    let response = yield call(api.get, '/resultrepresentational');

    yield put(returnResultRepresentationalRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateResultRepresentational({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/resultrepresentational', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteResultRepresentational({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/resultrepresentational?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@resultrepresentational/ADD_RESULT_REPRESENTATIONAL_REQUEST', AddResultRepresentational),
    takeLatest('@resultrepresentational/READ_RESULT_REPRESENTATIONAL', ReadResultRepresentational),
    takeLatest('@resultrepresentational/UPDATE_RESULT_REPRESENTATIONAL', UpdateResultRepresentational),
    takeLatest('@resultrepresentational/DELETE_RESULT_REPRESENTATIONAL', DeleteResultRepresentational)
]);