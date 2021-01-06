import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserRequest, getJwtRequest } from './actions';

export function* AddUser({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/user/add', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUser() {
  try {

    let response = yield call(api.get, '/user');

    yield put(returnUserRequest(response.data));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* ReturnJwt({ payload }) {
  try {

    let response = yield call(api.post, '/auth', payload);

    yield put(getJwtRequest(response.data.token));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateUser({ payload, resolve }) {
  try {

    const { id, object } = payload;

    const response = yield call(api.put, `/user/${id}`, object);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* DeleteUser({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/user/${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@user/ADD_USER_REQUEST', AddUser),
    takeLatest('@user/READ_USER', ReadUser),
    takeLatest('@user/UPDATE_USER', UpdateUser),
    takeLatest('@user/DELETE_USER', DeleteUser),
    takeLatest('@user/RETURN_JWT_USER', ReturnJwt),
]);
