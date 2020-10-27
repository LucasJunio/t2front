import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnSegmentRequest, returnForeignSegmentRequest } from '../segment/actions';

export function* AddSegment({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/segment', payload);
    resolve();
    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadSegment() {
  try {
    const response = yield call(api.get, '/segment');

    yield put(returnSegmentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateSegment({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/segment`, payload);

    resolve();
    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteSegment({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/segment?id=${id}`);

    console.log(response.data);
    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignSegment() {
  try {

    const response = yield call(api.get, '/segment');

    yield put(returnForeignSegmentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@segment/ADD_SEGMENT_REQUEST', AddSegment),
    takeLatest('@segment/READ_SEGMENT', ReadSegment),
    takeLatest('@segment/UPDATE_SEGMENT', UpdateSegment),
    takeLatest('@segment/DELETE_SEGMENT', DeleteSegment),
    takeLatest('@segment/FOREIGN_SEGMENT', ForeignSegment)
]);
