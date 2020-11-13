export function addGrouptypeRequest(object, resolve) {
    return {
        type: '@grouptype/ADD_GROUPTYPE_REQUEST',
        payload: object,
        resolve
    };
}

export function readGrouptypeRequest() {
    return {
        type: '@grouptype/READ_GROUPTYPE'
    };
}

export function returnGrouptypeRequest(grouptype) {
    return {
        type: '@grouptype/RETURN_GROUPTYPE',
        payload: { grouptype }
    };
}

export function updateGrouptypeRequest(object, resolve) {
    return {
        type: '@grouptype/UPDATE_GROUPTYPE',
        payload: object,
        resolve
    };
}

export function deleteGrouptypeRequest(id, resolve) {
    return {
        type: '@grouptype/DELETE_GROUPTYPE',
        payload: { id },
        resolve
    };
}