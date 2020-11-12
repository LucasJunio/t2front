export function addUserContentRequest(object, resolve) {
    return {
        type: '@usercontent/ADD_USER_CONTENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readUserContentRequest() {
    return {
        type: '@usercontent/READ_USER_CONTENT'
    };
}

export function returnUserContentRequest(usercontent) {
    return {
        type: '@usercontent/RETURN_USER_CONTENT',
        payload: { usercontent }
    };
}

export function updateUserContentRequest(object, resolve) {
    return {
        type: '@usercontent/UPDATE_USER_CONTENT',
        payload: object,
        resolve
    };
}

export function deleteUserContentRequest(id, resolve) {
    return {
        type: '@usercontent/DELETE_USER_CONTENT',
        payload: { id },
        resolve
    };
}
