import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContactRequest } from './actions';

export function* AddContact({ payload, resolve }) {
  try {
    // const { name, department, skills } = payload;
    const response = yield call(api.post, '/contact', payload);

    console.log(response.data);
    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContact({payload}) {
  try {
    const {id_company} = payload
    let response = yield call(api.get, `/contact?id_company=${id_company}`);

    yield put(returnContactRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContact({ payload, resolve }) {
  try {
    // const { name, id_department, id } = payload;

    const response = yield call(api.put, '/contact', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteContact({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/contact?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@contact/ADD_CONTACT_REQUEST', AddContact),
    takeLatest('@contact/READ_CONTACT', ReadContact),
    takeLatest('@contact/UPDATE_CONTACT', UpdateContact),
    takeLatest('@contact/DELETE_CONTACT', DeleteContact)
]);
