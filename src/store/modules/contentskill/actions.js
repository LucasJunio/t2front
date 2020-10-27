export function addContentSkillRequest(object, resolve) {
    return {
        type: '@contentskill/ADD_CONTENT_SKILL_REQUEST',
        payload: object,
        resolve
    };
}

export function readContentSkillRequest(id, resolve = () => {}) {
    return {
        type: '@contentskill/READ_CONTENT_SKILL',
        payload: id,
        resolve
    };
}

export function returnContentSkillRequest(object) {
    return {
        type: '@contentskill/RETURN_CONTENT_SKILL',
        payload: object
    };
}

export function updateContentSkillRequest(object, resolve) {
    return {
        type: '@contentskill/UPDATE_CONTENT_SKILL',
        payload: object,
        resolve
    };
}

export function deleteContentSkillRequest(id, resolve) {
    return {
        type: '@contentskill/DELETE_CONTENT_SKILL',
        payload: { id },
        resolve
    };
}
