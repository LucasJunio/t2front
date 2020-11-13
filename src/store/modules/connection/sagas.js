import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnConnectionRequest} from '../connection/actions';

export function* AddConnection({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/connection', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadConnection() {
  try {

    let response = yield call(api.get, '/connection');

    yield put(returnConnectionRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateConnection({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/connection', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteConnection({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/connection?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@connection/ADD_CONNECTION_REQUEST', AddConnection),
    takeLatest('@connection/READ_CONNECTION', ReadConnection),
    takeLatest('@connection/UPDATE_CONNECTION', UpdateConnection),
    takeLatest('@connection/DELETE_CONNECTION', DeleteConnection)
]);
