import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnCompanyRequest } from '../company/actions';

export function* AddCompany({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/company', payload);

    // const  company = name

    // const responseAssociative = yield call(api.post, '/companytype/add', {
    //   company, contenttype
    // });

    // console.log(responseAssociative.data);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadCompany() {
  try {
    const response = yield call(api.get, '/company');

    yield put(returnCompanyRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateCompany({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/company', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteCompany({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/company?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@company/ADD_COMPANY_REQUEST', AddCompany),
    takeLatest('@company/READ_COMPANY', ReadCompany),
    takeLatest('@company/UPDATE_COMPANY', UpdateCompany),
    takeLatest('@company/DELETE_COMPANY', DeleteCompany)
]);
