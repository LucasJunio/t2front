import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnFeedbackRequest} from '../feedback/actions';

export function* AddFeedback({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/feedback', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadFeedback() {
  try {

    let response = yield call(api.get, '/feedback');

    yield put(returnFeedbackRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateFeedback({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/feedback', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteFeedback({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/feedback?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@feedback/ADD_FEEDBACK_REQUEST', AddFeedback),
    takeLatest('@feedback/READ_FEEDBACK', ReadFeedback),
    takeLatest('@feedback/UPDATE_FEEDBACK', UpdateFeedback),
    takeLatest('@feedback/DELETE_FEEDBACK', DeleteFeedback)
]);
