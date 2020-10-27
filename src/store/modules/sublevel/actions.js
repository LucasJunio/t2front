export function addSublevelRequest(object, resolve) {
    return {
        type: '@sublevel/ADD_SUBLEVEL_REQUEST',
        payload: object,
        resolve
    };
}

export function readSublevelRequest() {
    return {
        type: '@sublevel/READ_SUBLEVEL'
    };
}

export function returnSublevelRequest(sublevel) {
    return {
        type: '@sublevel/RETURN_SUBLEVEL',
        payload: { sublevel }
    };
}

export function updateSublevelRequest(object, resolve) {
    return {
        type: '@sublevel/UPDATE_SUBLEVEL',
        payload: object,
        resolve
    };
}

export function deleteSublevelRequest(id, resolve) {
    return {
        type: '@sublevel/DELETE_SUBLEVEL',
        payload: { id },
        resolve
    };
}

export function foreignSublevelRequest() {
    return {
        type: '@sublevel/FOREIGN_SUBLEVEL',
    };
}

export function returnForeignSublevelRequest(foreignSublevel) {
    return {
        type: '@sublevel/RETURNFOREIGN_SUBLEVEL',
        payload: { foreignSublevel }
    };
}
