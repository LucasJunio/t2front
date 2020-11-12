export function addResultRepresentationalRequest(object, resolve) {
    return {
        type: '@resultrepresentational/ADD_RESULT_REPRESENTATIONAL_REQUEST',
        payload: object,
        resolve
    };
}

export function readResultRepresentationalRequest() {
    return {
        type: '@resultrepresentational/READ_RESULT_REPRESENTATIONAL'
    };
}

export function returnResultRepresentationalRequest(resultrepresentational) {
    return {
        type: '@resultrepresentational/RETURN_RESULT_REPRESENTATIONAL',
        payload: { resultrepresentational }
    };
}

export function updateResultRepresentationalRequest(object, resolve) {
    return {
        type: '@resultrepresentational/UPDATE_RESULT_REPRESENTATIONAL',
        payload: object,
        resolve
    };
}

export function deleteResultRepresentationalRequest(id, resolve) {
    return {
        type: '@resultrepresentational/DELETE_RESULT_REPRESENTATIONAL',
        payload: { id },
        resolve
    };
}
