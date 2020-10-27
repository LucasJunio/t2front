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

export function updateUserRequest(object, resolve) {
    return {
        type: '@user/UPDATE_USER',
        payload: object,
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

export function foreignUserRequest() {
    return {
        type: '@user/FOREIGN_USER',
    };
}

export function returnForeignUserRequest(foreignUser) {
    return {
        type: '@user/RETURNFOREIGN_USER',
        payload: { foreignUser }
    };
}
