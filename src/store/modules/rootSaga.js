import { all } from 'redux-saga/effects';

// Alphabetically organized

import auth from './auth/sagas';
import vehicles from "./vehicles/sagas";

export default function* rootSaga() {
  return yield all([
    auth, vehicles
  ]);
}
