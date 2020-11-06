export function addFormationRequest(object, resolve) {
    return {
        type: '@formation/ADD_FORMATION_REQUEST',
        payload: object,
        resolve
    };
}

export function readFormationRequest() {
    return {
        type: '@formation/READ_FORMATION'
    };
}

export function returnFormationRequest(formation) {
    return {
        type: '@formation/RETURN_FORMATION',
        payload: { formation }
    };
}

export function updateFormationRequest(object, resolve) {
    return {
        type: '@formation/UPDATE_FORMATION',
        payload: object,
        resolve
    };
}

export function deleteFormationRequest(id, resolve) {
    return {
        type: '@formation/DELETE_FORMATION',
        payload: { id },
        resolve
    };
}
