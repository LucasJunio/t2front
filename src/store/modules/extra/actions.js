export function addExtraRequest(object, resolve) {
    return {
        type: '@extra/ADD_EXTRA_REQUEST',
        payload: object,
        resolve
    };
}

export function readExtraRequest() {
    return {
        type: '@extra/READ_EXTRA'
    };
}

export function returnExtraRequest(extra) {
    return {
        type: '@extra/RETURN_EXTRA',
        payload: { extra }
    };
}

export function updateExtraRequest(object, resolve) {
    return {
        type: '@extra/UPDATE_EXTRA',
        payload: object,
        resolve
    };
}

export function deleteExtraRequest(id, resolve) {
    return {
        type: '@extra/DELETE_EXTRA',
        payload: { id },
        resolve
    };
}
