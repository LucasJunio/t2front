import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnGrouptypeRequest} from '../grouptype/actions';

export function* AddGrouptype({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/grouptype', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadGrouptype() {
  try {

    let response = yield call(api.get, '/grouptype');

    yield put(returnGrouptypeRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateGrouptype({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/grouptype', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteGrouptype({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/grouptype?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@grouptype/ADD_GROUPTYPE_REQUEST', AddGrouptype),
    takeLatest('@grouptype/READ_GROUPTYPE', ReadGrouptype),
    takeLatest('@grouptype/UPDATE_GROUPTYPE', UpdateGrouptype),
    takeLatest('@grouptype/DELETE_GROUPTYPE', DeleteGrouptype)
]);
