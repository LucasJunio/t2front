export function addConnectionRequest(object, resolve) {
    return {
        type: '@connection/ADD_CONNECTION_REQUEST',
        payload: object,
        resolve
    };
}

export function readConnectionRequest() {
    return {
        type: '@connection/READ_CONNECTION'
    };
}

export function returnConnectionRequest(connection) {
    return {
        type: '@connection/RETURN_CONNECTION',
        payload: { connection }
    };
}

export function updateConnectionRequest(object, resolve) {
    return {
        type: '@connection/UPDATE_CONNECTION',
        payload: object,
        resolve
    };
}

export function deleteConnectionRequest(id, resolve) {
    return {
        type: '@connection/DELETE_CONNECTION',
        payload: { id },
        resolve
    };
}
