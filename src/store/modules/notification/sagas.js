import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnNotificationRequest} from '../notification/actions';

export function* AddNotification({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/notification', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadNotification() {
  try {

    let response = yield call(api.get, '/notification');

    yield put(returnNotificationRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateNotification({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/notification', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteNotification({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/notification?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@notification/ADD_NOTIFICATION_REQUEST', AddNotification),
    takeLatest('@notification/READ_NOTIFICATION', ReadNotification),
    takeLatest('@notification/UPDATE_NOTIFICATION', UpdateNotification),
    takeLatest('@notification/DELETE_NOTIFICATION', DeleteNotification)
]);
