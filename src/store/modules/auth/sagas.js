import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

import {setUser, setToken, logout} from './authLocalStorage'
import {returnSkillRequest} from "../skill/actions";

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/login', {
      email,
      password,
    });

    const { jwt, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    setUser(user)
    setToken(jwt)

    yield put(signInSuccess(jwt, user));

    history.push('/admin/');

  } catch (err) {
    console.log(err);
    yield put(signFailure());
    console.log('Falha na autenticação, verifique seus dados');
  }
}

export function Logout() {
  try {

    api.defaults.headers.Authorization = '';
    logout()
    history.push('/');

  } catch (err) {
    console.log('Falha no Logout');
  }
}

export function* LoginSocial({ payload, resolve = () => {} }) {
  try {
    const response = yield call(api.post, '/authentication-provider', payload);
    const { jwt, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    setUser(user)
    setToken(jwt)

    yield put(signInSuccess(response.data.jwt, response.data.user));
    history.push('/admin/');

  } catch (err) {
    console.log('Falha no Login');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
  takeLatest('@auth/SIGN_OUT', Logout),
  takeLatest('@auth/LOGIN_SOCIAL', LoginSocial),
])
