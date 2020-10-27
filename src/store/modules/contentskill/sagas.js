import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnContentSkillRequest } from './actions';

export function* AddContentSkill({ payload, resolve }) {
  try {
    const response = yield call(api.post, '/content-skill', payload);

    resolve();

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadContentSkill({payload, resolve}) {
  try {
    let response = yield call(api.get, `/content-skill?id_content=${payload}`);

    yield put(returnContentSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateContentSkill({ payload, resolve }) {
  try {
    // const { name, id_department, id } = payload;

    const response = yield call(api.put, '/content-skill', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteContentSkill({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/content-skill?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@contentskill/ADD_CONTENT_SKILL_REQUEST', AddContentSkill),
    takeLatest('@contentskill/READ_CONTENT_SKILL', ReadContentSkill),
    takeLatest('@contentskill/UPDATE_CONTENT_SKILL', UpdateContentSkill),
    takeLatest('@contentskill/DELETE_CONTENT_SKILL', DeleteContentSkill),
]);
