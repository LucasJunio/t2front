export function addParticiantsRequest(object, resolve) {
    return {
        type: '@participants/ADD_PARTICIPANTS_REQUEST',
        payload: object,
        resolve
    };
}

export function readParticiantsRequest() {
    return {
        type: '@participants/READ_PARTICIPANTS'
    };
}

export function returnParticiantsRequest(participants) {
    return {
        type: '@participants/RETURN_PARTICIPANTS',
        payload: { participants }
    };
}

export function updateParticiantsRequest(object, resolve) {
    return {
        type: '@participants/UPDATE_PARTICIPANTS',
        payload: object,
        resolve
    };
}

export function deleteParticiantsRequest(id, resolve) {
    return {
        type: '@participants/DELETE_PARTICIPANTS',
        payload: { id },
        resolve
    };
}
