export function addSkillUserRequest(object, resolve) {
    return {
        type: '@skilluser/ADD_SKILLUSER_REQUEST',
        payload: object,
        resolve
    };
}

export function readSkillUserRequest() {
    return {
        type: '@skilluser/READ_SKILLUSER'
    };
}

export function returnSkillUserRequest(skilluser) {
    return {
        type: '@skilluser/RETURN_SKILLUSER',
        payload: { skilluser }
    };
}

export function updateSkillUserRequest(object, resolve) {
    return {
        type: '@skilluser/UPDATE_SKILLUSER',
        payload: object,
        resolve
    };
}

export function deleteSkillUserRequest(id, resolve) {
    return {
        type: '@skilluser/DELETE_SKILLUSER',
        payload: { id },
        resolve
    };
}
