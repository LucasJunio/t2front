import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnPdiRequest} from '../pdi/actions';

export function* AddPdi({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/pdi', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadPdi() {
  try {

    let response = yield call(api.get, '/pdi');

    yield put(returnPdiRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdatePdi({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/pdi', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeletePdi({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/pdi?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@pdi/ADD_PDI_REQUEST', AddPdi),
    takeLatest('@pdi/READ_PDI', ReadPdi),
    takeLatest('@pdi/UPDATE_PDI', UpdatePdi),
    takeLatest('@pdi/DELETE_PDI', DeletePdi)
]);
