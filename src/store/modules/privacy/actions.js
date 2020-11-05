export function addPrivacyRequest(object, resolve) {
    return {
        type: '@privacy/ADD_PRIVACY_REQUEST',
        payload: object,
        resolve
    };
}

export function readPrivacyRequest() {
    return {
        type: '@privacy/READ_PRIVACY'
    };
}

export function returnPrivacyRequest(privacy) {
    return {
        type: '@privacy/RETURN_PRIVACY',
        payload: { privacy }
    };
}

export function updatePrivacyRequest(object, resolve) {
    return {
        type: '@privacy/UPDATE_PRIVACY',
        payload: object,
        resolve
    };
}

export function deletePrivacyRequest(id, resolve) {
    return {
        type: '@privacy/DELETE_PRIVACY',
        payload: { id },
        resolve
    };
}
