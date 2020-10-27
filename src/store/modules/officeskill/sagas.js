import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnOfficeSkillRequest } from './actions';

export function* AddOfficeSkill({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/office-skill', payload);

    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadOfficeSkill({payload, resolve}) {
  try {
    let response = yield call(api.get, `/office-skill?id_office=${payload}`);

    yield put(returnOfficeSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateOfficeSkill({ payload, resolve }) {
  try {
    // const { name, id_department, id } = payload;

    const response = yield call(api.put, '/office-skill', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteOfficeSkill({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/office-skill?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@officeskill/ADD_OFFICE_SKILL_REQUEST', AddOfficeSkill),
    takeLatest('@officeskill/READ_OFFICE_SKILL', ReadOfficeSkill),
    takeLatest('@officeskill/UPDATE_OFFICE_SKILL', UpdateOfficeSkill),
    takeLatest('@officeskill/DELETE_OFFICE_SKILL', DeleteOfficeSkill),
]);
