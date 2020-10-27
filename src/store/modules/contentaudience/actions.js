export function addContentAudienceRequest(object, resolve) {
    return {
        type: '@contentaudience/ADD_CONTENT_AUDIENCE_REQUEST',
        payload: object,
        resolve
    };
}

export function readContentAudienceRequest(id, resolve = () => {}) {
    return {
        type: '@contentaudience/READ_CONTENT_AUDIENCE',
        payload: id,
        resolve
    };
}

export function returnContentAudienceRequest(object) {
    return {
        type: '@contentaudience/RETURN_CONTENT_AUDIENCE',
        payload: object
    };
}

export function updateContentAudienceRequest(object, resolve) {
    return {
        type: '@contentaudience/UPDATE_CONTENT_AUDIENCE',
        payload: object,
        resolve
    };
}

export function deleteContentAudienceRequest(id, resolve) {
    return {
        type: '@contentaudience/DELETE_CONTENT_AUDIENCE',
        payload: { id },
        resolve
    };
}
