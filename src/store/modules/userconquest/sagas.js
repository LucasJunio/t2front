import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserConquestRequest} from '../userconquest/actions';

export function* AddUserConquest({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/userconquest', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUserConquest() {
  try {

    let response = yield call(api.get, '/userconquest');

    yield put(returnUserConquestRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateUserConquest({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/userconquest', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUserConquest({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/userconquest?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@userconquest/ADD_USERCONQUEST_REQUEST', AddUserConquest),
    takeLatest('@userconquest/READ_USERCONQUEST', ReadUserConquest),
    takeLatest('@userconquest/UPDATE_USERCONQUEST', UpdateUserConquest),
    takeLatest('@userconquest/DELETE_USERCONQUEST', DeleteUserConquest)
]);
