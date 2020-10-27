export function addInterestRequest(object, resolve) {
    return {
        type: '@interest/ADD_INTEREST_REQUEST',
        payload: object,
        resolve
    };
}

export function readInterestRequest() {
    return {
        type: '@interest/READ_INTEREST'
    };
}

export function returnInterestRequest(interest) {
    return {
        type: '@interest/RETURN_INTEREST',
        payload: { interest }
    };
}

export function updateInterestRequest(object, resolve) {
    return {
        type: '@interest/UPDATE_INTEREST',
        payload: object,
        resolve
    };
}

export function deleteInterestRequest(id, resolve) {
    return {
        type: '@interest/DELETE_INTEREST',
        payload: { id },
        resolve
    };
}
