export function addUsergroupRequest(object, resolve) {
    return {
        type: '@usergroup/ADD_USER_GROUP_REQUEST',
        payload: object,
        resolve
    };
}

export function readUsergroupRequest() {
    return {
        type: '@usergroup/READ_USER_GROUP'
    };
}

export function returnUsergroupRequest(usergroup) {
    return {
        type: '@usergroup/RETURN_USER_GROUP',
        payload: { usergroup }
    };
}

export function updateUsergroupRequest(object, resolve) {
    return {
        type: '@usergroup/UPDATE_USER_GROUP',
        payload: object,
        resolve
    };
}

export function deleteUsergroupRequest(id, resolve) {
    return {
        type: '@usergroup/DELETE_USER_GROUP',
        payload: { id },
        resolve
    };
}
