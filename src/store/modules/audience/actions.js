export function addAudienceRequest(object, resolve) {
    return {
        type: '@audience/ADD_AUDIENCE_REQUEST',
        payload: object,
        resolve
    };
}

export function readAudienceRequest() {
    return {
        type: '@audience/READ_AUDIENCE'
    };
}

export function returnAudienceRequest(audience) {
    return {
        type: '@audience/RETURN_AUDIENCE',
        payload: { audience }
    };
}

export function updateAudienceRequest(object, resolve) {
    return {
        type: '@audience/UPDATE_AUDIENCE',
        payload: object,
        resolve
    };
}

export function deleteAudienceRequest(id, resolve) {
    return {
        type: '@audience/DELETE_AUDIENCE',
        payload: { id },
        resolve
    };
}
