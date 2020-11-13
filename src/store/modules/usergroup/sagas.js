import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserGroupRequest} from '../usergroup/actions';

export function* AddUserGroup({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/user-group', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUserGroup() {
  try {

    let response = yield call(api.get, '/user-group');

    yield put(returnUserGroupRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateUserGroup({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/user-group', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUserGroup({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/user-group?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@usergroup/ADD_USER_GROUP_REQUEST', AddUserGroup),
    takeLatest('@usergroup/READ_USER_GROUP', ReadUserGroup),
    takeLatest('@usergroup/UPDATE_USER_GROUP', UpdateUserGroup),
    takeLatest('@usergroup/DELETE_USER_GROUP', DeleteUserGroup)
]);
