import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnOfficeHistoryRequest} from '../officehistory/actions';

export function* AddOfficeHistory({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/office-history', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadOfficeHistory() {
  try {

    let response = yield call(api.get, '/office-history');

    yield put(returnOfficeHistoryRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateOfficeHistory({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/office-history', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteOfficeHistory({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/office-history?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@officehistory/ADD_OFFICE_HISTORY_REQUEST', AddOfficeHistory),
    takeLatest('@officehistory/READ_OFFICE_HISTORY', ReadOfficeHistory),
    takeLatest('@officehistory/UPDATE_OFFICE_HISTORY', UpdateOfficeHistory),
    takeLatest('@officehistory/DELETE_OFFICE_HISTORY', DeleteOfficeHistory)
]);
