import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnSkillRequest } from '../skill/actions';

export function* AddSkill({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/skill', payload);

    resolve();
    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadSkill() {
  try {
    const response = yield call(api.get, '/skill');

    yield put(returnSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateSkill({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/skill`, payload);
    resolve();
    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteSkill({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/skill?id=${id}`);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@skill/ADD_SKILL_REQUEST', AddSkill),
    takeLatest('@skill/READ_SKILL', ReadSkill),
    takeLatest('@skill/UPDATE_SKILL', UpdateSkill),
    takeLatest('@skill/DELETE_SKILL', DeleteSkill)
]);
