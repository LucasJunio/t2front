import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnDepartmentRequest, returnForeignDepartmentRequest } from '../department/actions';

export function* AddDepartment({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/department', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadDepartment() {
  try {
    let response = yield call(api.get, '/department');

    yield put(returnDepartmentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateDepartment({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/department', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteDepartment({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/department?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignDepartment() {
  try {

    const response = yield call(api.get, '/department/foreign');

    yield put(returnForeignDepartmentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@department/ADD_DEPARTMENT_REQUEST', AddDepartment),
    takeLatest('@department/READ_DEPARTMENT', ReadDepartment),
    takeLatest('@department/UPDATE_DEPARTMENT', UpdateDepartment),
    takeLatest('@department/DELETE_DEPARTMENT', DeleteDepartment),
    takeLatest('@department/FOREIGN_DEPARTMENT', ForeignDepartment)
]);
