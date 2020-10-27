import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContentDepartmentRequest } from './actions';

export function* AddContentDepartment({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/content-department', payload);

    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContentDepartment({payload, resolve}) {
  try {
    let response = yield call(api.get, `/content-department?id_content=${payload}`);

    yield put(returnContentDepartmentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContentDepartment({ payload, resolve }) {
  try {
    // const { name, id_department, id } = payload;

    const response = yield call(api.put, '/content-department', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteContentDepartment({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/content-department?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@contentdepartment/ADD_CONTENT_DEPARTMENT_REQUEST', AddContentDepartment),
    takeLatest('@contentdepartment/READ_CONTENT_DEPARTMENT', ReadContentDepartment),
    takeLatest('@contentdepartment/UPDATE_CONTENT_DEPARTMENT', UpdateContentDepartment),
    takeLatest('@contentdepartment/DELETE_CONTENT_DEPARTMENT', DeleteContentDepartment),
]);
