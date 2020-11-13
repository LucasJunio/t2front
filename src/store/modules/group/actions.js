export function addGroupRequest(object, resolve) {
    return {
        type: '@group/ADD_GROUP_REQUEST',
        payload: object,
        resolve
    };
}

export function readGroupRequest() {
    return {
        type: '@group/READ_GROUP'
    };
}

export function returnGroupRequest(group) {
    return {
        type: '@group/RETURN_GROUP',
        payload: { group }
    };
}

export function updateGroupRequest(object, resolve) {
    return {
        type: '@group/UPDATE_GROUP',
        payload: object,
        resolve
    };
}

export function deleteGroupRequest(id, resolve) {
    return {
        type: '@group/DELETE_GROUP',
        payload: { id },
        resolve
    };
}
