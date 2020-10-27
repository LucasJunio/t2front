import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnSublevelSkillRequest, returnForeignSublevelSkillRequest } from './actions';

export function* AddSublevelSkill({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/sublevel-skill', payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadSublevelSkill({payload, resolve}) {
  try {
    let response = yield call(api.get, `/sublevel-skill?id_skill=${payload}`);

    yield put(returnSublevelSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateSublevelSkill({ payload, resolve }) {
  try {
    const response = yield call(api.put, `/sublevel-skill`, payload);

    console.log(response.data);
    resolve();
  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteSublevelSkill({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/sublevel-skill?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignSublevelSkill() {
  try {

    const response = yield call(api.get, '/sublevelskill/foreign');

    yield put(returnForeignSublevelSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@sublevelskill/ADD_SUBLEVEL_SKILL_REQUEST', AddSublevelSkill),
    takeLatest('@sublevelskill/READ_SUBLEVEL_SKILL', ReadSublevelSkill),
    takeLatest('@sublevelskill/UPDATE_SUBLEVEL_SKILL', UpdateSublevelSkill),
    takeLatest('@sublevelskill/DELETE_SUBLEVEL_SKILL', DeleteSublevelSkill),
    takeLatest('@sublevelskill/FOREIGN_SUBLEVEL_SKILL', ForeignSublevelSkill)
]);
