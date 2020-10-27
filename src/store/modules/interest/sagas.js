import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnInterestRequest } from '../interest/actions';

export function* AddInterest({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/interest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadInterest() {
  try {
    const response = yield call(api.get, '/interest');

    yield put(returnInterestRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateInterest({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/interest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteInterest({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/interest?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@interest/ADD_INTEREST_REQUEST', AddInterest),
    takeLatest('@interest/READ_INTEREST', ReadInterest),
    takeLatest('@interest/UPDATE_INTEREST', UpdateInterest),
    takeLatest('@interest/DELETE_INTEREST', DeleteInterest)
]);
