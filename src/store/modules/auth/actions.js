export function signInRequest(email, password, resolve = () => {}) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
    resolve
  };
}

export function signInSuccess(token, user, resolve = () => {}) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
    resolve
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  };
}

export function loginSocial(data) {
  return {
    type: '@auth/LOGIN_SOCIAL',
    payload: data
  };
}
