import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnParticipantsRequest} from '../participants/actions';

export function* AddParticipants({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/participants', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadParticipants() {
  try {

    let response = yield call(api.get, '/participants');

    yield put(returnParticipantsRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateParticipants({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/participants', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteParticipants({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/participants?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@participants/ADD_PARTICIPANTS_REQUEST', AddParticipants),
    takeLatest('@participants/READ_PARTICIPANTS', ReadParticipants),
    takeLatest('@participants/UPDATE_PARTICIPANTS', UpdateParticipants),
    takeLatest('@participants/DELETE_PARTICIPANTS', DeleteParticipants)
]);
