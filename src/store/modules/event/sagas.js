import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnEventRequest} from '../event/actions';

export function* AddEvent({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/event', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadEvent() {
  try {

    let response = yield call(api.get, '/event');

    yield put(returnEventRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateEvent({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/event', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteEvent({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/event?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@event/ADD_EVENT_REQUEST', AddEvent),
    takeLatest('@event/READ_EVENT', ReadEvent),
    takeLatest('@event/UPDATE_EVENT', UpdateEvent),
    takeLatest('@event/DELETE_EVENT', DeleteEvent)
]);
