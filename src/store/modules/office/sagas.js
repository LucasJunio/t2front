import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnOfficeRequest, returnForeignOfficeRequest } from './actions';

export function* AddOffice({ payload, resolve }) {
  try {
    // const { name, department, skills } = payload;
    const response = yield call(api.post, '/office', payload);

    console.log(response.data);
    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadOffice() {
  try {
    let response = yield call(api.get, '/office');

    yield put(returnOfficeRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateOffice({ payload, resolve }) {
  try {
    // const { name, id_department, id } = payload;

    const response = yield call(api.put, '/office', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteOffice({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/office?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@office/ADD_OFFICE_REQUEST', AddOffice),
    takeLatest('@office/READ_OFFICE', ReadOffice),
    takeLatest('@office/UPDATE_OFFICE', UpdateOffice),
    takeLatest('@office/DELETE_OFFICE', DeleteOffice)
]);
