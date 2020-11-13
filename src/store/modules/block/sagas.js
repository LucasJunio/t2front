import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnBlockRequest} from '../block/actions';

export function* AddBlock({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/block', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadBlock() {
  try {

    let response = yield call(api.get, '/block');

    yield put(returnBlockRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateBlock({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/block', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteBlock({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/block?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@block/ADD_BLOCK_REQUEST', AddBlock),
    takeLatest('@block/READ_BLOCK', ReadBlock),
    takeLatest('@block/UPDATE_BLOCK', UpdateBlock),
    takeLatest('@block/DELETE_BLOCK', DeleteBlock)
]);
