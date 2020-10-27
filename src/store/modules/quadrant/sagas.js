import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnQuadrantRequest, returnForeignQuadrantRequest } from '../quadrant/actions';

export function* AddQuadrant({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/quadrant', payload);

    console.log(response.data);
    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadQuadrant() {
  try {
    let response = yield call(api.get, '/quadrant');

    yield put(returnQuadrantRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateQuadrant({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/quadrant`, payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteQuadrant({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/quadrant?id=${id}`);

    console.log(response.data);
    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignQuadrant() {
  try {

    const response = yield call(api.get, '/quadrant/foreign');

    yield put(returnForeignQuadrantRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@quadrant/ADD_QUADRANT_REQUEST', AddQuadrant),
    takeLatest('@quadrant/READ_QUADRANT', ReadQuadrant),
    takeLatest('@quadrant/UPDATE_QUADRANT', UpdateQuadrant),
    takeLatest('@quadrant/DELETE_QUADRANT', DeleteQuadrant),
    takeLatest('@quadrant/FOREIGN_QUADRANT', ForeignQuadrant)
]);
