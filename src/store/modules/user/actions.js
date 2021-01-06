export function addUserRequest(object, resolve) {
    return {
        type: '@user/ADD_USER_REQUEST',
        payload: object,
        resolve
    };
}

export function readUserRequest() {
    return {
        type: '@user/READ_USER'
    };
}

export function returnUserRequest(user) {
    return {
        type: '@user/RETURN_USER',
        payload: { user }
    };
}

export function updateUserRequest(id, object, resolve) {
    return {
        type: '@user/UPDATE_USER',
        payload: { id, object },
        resolve
    };
}

export function deleteUserRequest(id, resolve) {
    return {
        type: '@user/DELETE_USER',
        payload: { id },
        resolve
    };
}

export function returnJwtRequest(email, password) {
    return {
        type: '@user/RETURN_JWT_USER',
        payload: { email, password }
    };
}

export function getJwtRequest(jwt) {
    return {
        type: '@user/GET_JWT_USER',
        payload: { jwt }
    };
}
