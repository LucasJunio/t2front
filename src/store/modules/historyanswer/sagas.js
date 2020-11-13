import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnHistoryAnswerRequest} from '../historyanswer/actions';

export function* AddHistoryAnswer({ payload, resolve }) {
  try {

    const response = yield call(api.post, '/historyanswer', payload);

    console.log(response.data);

    resolve();


  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadHistoryAnswer() {
  try {

    let response = yield call(api.get, '/historyanswer');

    yield put(returnHistoryAnswerRequest(response.data.rows));

  } catch (error) {
    console.log(error.response.data.rows);
  }
}

export function* UpdateHistoryAnswer({ payload, resolve }) {
  try {
    const response = yield call(api.put, '/historyanswer', payload);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteHistoryAnswer({ payload, resolve }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/historyanswer?id=${id}`);

    resolve();

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export default all([
    takeLatest('@historyanswer/ADD_HISTORYANSWER_REQUEST', AddHistoryAnswer),
    takeLatest('@historyanswer/READ_HISTORYANSWER', ReadHistoryAnswer),
    takeLatest('@historyanswer/UPDATE_HISTORYANSWER', UpdateHistoryAnswer),
    takeLatest('@historyanswer/DELETE_HISTORYANSWER', DeleteHistoryAnswer)
]);
