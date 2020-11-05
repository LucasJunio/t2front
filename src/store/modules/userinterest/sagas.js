import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserInterestRequest } from '../userinterest/actions';

export function* AddUserInterest({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/user-interest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUserInterest() {
  try {
    const response = yield call(api.get, '/user-interest');

    yield put(returnUserInterestRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateUserInterest({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/user-interest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUserInterest({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/user-interest?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@userinterest/ADD_USER_INTEREST_REQUEST', AddUserInterest),
    takeLatest('@userinterest/READ_USER_INTEREST', ReadUserInterest),
    takeLatest('@userinterest/UPDATE_USER_INTEREST', UpdateUserInterest),
    takeLatest('@userinterest/DELETE_USER_INTEREST', DeleteUserInterest)
]);
