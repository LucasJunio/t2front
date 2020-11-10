import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnGroupRequest} from '../group/actions';

export function* AddGroup({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/group', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadGroup() {
  try {

    let response = yield call(api.get, '/group');

    yield put(returnGroupRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateGroup({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/group', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteGroup({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/group?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@group/ADD_GROUP_REQUEST', AddGroup),
    takeLatest('@group/READ_GROUP', ReadGroup),
    takeLatest('@group/UPDATE_GROUP', UpdateGroup),
    takeLatest('@group/DELETE_GROUP', DeleteGroup)
]);
