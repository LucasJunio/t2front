import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserRequest, returnForeignUserRequest } from '../user/actions';

export function* AddUser({ payload, resolve }) {
  try {

    console.log('payload', payload)
    const response = yield call(api.post, '/user', payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUser() {
  try {
    let response = yield call(api.get, '/user');

    yield put(returnUserRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateUser({ payload, resolve }) {
  try {

    const response = yield call(api.put, `/user`, payload);

    console.log(response);

    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUser({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/user?id=${id}`);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignUser() {
  try {

    const response = yield call(api.get, '/user');

    yield put(returnForeignUserRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@user/ADD_USER_REQUEST', AddUser),
    takeLatest('@user/READ_USER', ReadUser),
    takeLatest('@user/UPDATE_USER', UpdateUser),
    takeLatest('@user/DELETE_USER', DeleteUser),
    takeLatest('@user/FOREIGN_USER', ForeignUser)
]);


