export function addUserInterestRequest(object, resolve) {
    return {
        type: '@userinterest/ADD_USER_INTEREST_REQUEST',
        payload: object,
        resolve
    };
}

export function readUserInterestRequest() {
    return {
        type: '@userinterest/READ_USER_INTEREST'
    };
}

export function returnUserInterestRequest(userinterest) {
    return {
        type: '@userinterest/RETURN_USER_INTEREST',
        payload: { userinterest }
    };
}

export function updateUserInterestRequest(object, resolve) {
    return {
        type: '@userinterest/UPDATE_USER_INTEREST',
        payload: object,
        resolve
    };
}

export function deleteUserInterestRequest(id, resolve) {
    return {
        type: '@userinterest/DELETE_USER_INTEREST',
        payload: { id },
        resolve
    };
}
