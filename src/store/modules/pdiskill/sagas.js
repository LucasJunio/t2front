import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnPdiSkillRequest} from '../pdiskill/actions';

export function* AddPdiSkill({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/pdi-skill', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadPdiSkill() {
  try {

    let response = yield call(api.get, '/pdi-skill');

    yield put(returnPdiSkillRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdatePdiSkill({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/pdi-skill', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeletePdiSkill({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/pdi-skill?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@pdiskill/ADD_PDI_SKILL_REQUEST', AddPdiSkill),
    takeLatest('@pdiskill/READ_PDI_SKILL', ReadPdiSkill),
    takeLatest('@pdiskill/UPDATE_PDI_SKILL', UpdatePdiSkill),
    takeLatest('@pdiskill/DELETE_PDI_SKILL', DeletePdiSkill)
]);
