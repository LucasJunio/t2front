import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnCompanyTypeRequest } from '../companytype/actions';

export function* AddCompanyType({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/companytype', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadCompanyType() {
  try {
    const response = yield call(api.get, '/companytype');

    yield put(returnCompanyTypeRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateCompanyType({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/companytype', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteCompanyType({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/companytype?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@CompanyType/ADD_COMPANYTYPE_REQUEST', AddCompanyType),
    takeLatest('@CompanyType/READ_COMPANYTYPE', ReadCompanyType),
    takeLatest('@CompanyType/UPDATE_COMPANYTYPE', UpdateCompanyType),
    takeLatest('@CompanyType/DELETE_COMPANYTYPE', DeleteCompanyType)
]);
