import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnVehiclesRequest} from './actions';

export function* AddVehicles({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/vehicles', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadVehicles() {
  try {

    let response = yield call(api.get, '/vehicles');

    yield put(returnVehiclesRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateVehicles({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/vehicles', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteVehicles({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/vehicles?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@vehicles/ADD_VEHICLES_REQUEST', AddVehicles),
    takeLatest('@vehicles/READ_VEHICLES', ReadVehicles),
    takeLatest('@vehicles/UPDATE_VEHICLES', UpdateVehicles),
    takeLatest('@vehicles/DELETE_VEHICLES', DeleteVehicles)
]);
