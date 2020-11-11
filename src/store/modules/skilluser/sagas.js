import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnSkillUserRequest} from '../skilluser/actions';

export function* AddSkillUser({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/skilluser', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadSkillUser() {
  try {

    let response = yield call(api.get, '/skilluser');

    yield put(returnSkillUserRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateSkillUser({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/skilluser', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteSkillUser({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/skilluser?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@skilluser/ADD_SKILLUSER_REQUEST', AddSkillUser),
    takeLatest('@skilluser/READ_SKILLUSER', ReadSkillUser),
    takeLatest('@skilluser/UPDATE_SKILLUSER', UpdateSkillUser),
    takeLatest('@skilluser/DELETE_SKILLUSER', DeleteSkillUser)
]);
