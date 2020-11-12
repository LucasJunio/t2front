export function addDenunciationRequest(object, resolve) {
    return {
        type: '@denunciation/ADD_DENUNCIATION_REQUEST',
        payload: object,
        resolve
    };
}

export function readDenunciationRequest() {
    return {
        type: '@denunciation/READ_DENUNCIATION'
    };
}

export function returnDenunciationRequest(denunciation) {
    return {
        type: '@denunciation/RETURN_DENUNCIATION',
        payload: { denunciation }
    };
}

export function updateDenunciationRequest(object, resolve) {
    return {
        type: '@denunciation/UPDATE_DENUNCIATION',
        payload: object,
        resolve
    };
}

export function deleteDenunciationRequest(id, resolve) {
    return {
        type: '@denunciation/DELETE_DENUNCIATION',
        payload: { id },
        resolve
    };
}
