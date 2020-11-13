import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserContentRequest} from '../user-content/actions';

export function* AddUserContent({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/user-content', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUserContent() {
  try {

    let response = yield call(api.get, '/user-content');

    yield put(returnUserContentRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateUserContent({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/user-content', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUserContent({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/user-content?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@usercontent/ADD_USER_CONTENT_REQUEST', AddUserContent),
    takeLatest('@usercontent/READ_USER_CONTENT', ReadUserContent),
    takeLatest('@usercontent/UPDATE_USER_CONTENT', UpdateUserContent),
    takeLatest('@usercontent/DELETE_USER_CONTENT', DeleteUserContent)
]);
