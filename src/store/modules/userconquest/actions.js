export function addUserConquestRequest(object, resolve) {
    return {
        type: '@userconquest/ADD_USERCONQUEST_REQUEST',
        payload: object,
        resolve
    };
}

export function readUserConquestRequest() {
    return {
        type: '@userconquest/READ_USERCONQUEST'
    };
}

export function returnUserConquestRequest(userconquest) {
    return {
        type: '@userconquest/RETURN_USERCONQUEST',
        payload: { userconquest }
    };
}

export function updateUserConquestRequest(object, resolve) {
    return {
        type: '@userconquest/UPDATE_USERCONQUEST',
        payload: object,
        resolve
    };
}

export function deleteUserConquestRequest(id, resolve) {
    return {
        type: '@userconquest/DELETE_USERCONQUEST',
        payload: { id },
        resolve
    };
}
