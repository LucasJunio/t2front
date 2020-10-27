export function addOfficeSkillRequest(object, resolve) {
    return {
        type: '@officeskill/ADD_OFFICE_SKILL_REQUEST',
        payload: object,
        resolve
    };
}

export function readOfficeSkillRequest(id, resolve = () => {}) {
    return {
        type: '@officeskill/READ_OFFICE_SKILL',
        payload: id,
        resolve
    };
}

export function returnOfficeSkillRequest(object) {
    return {
        type: '@officeskill/RETURN_OFFICE_SKILL',
        payload: object
    };
}

export function updateOfficeSkillRequest(object, resolve) {
    return {
        type: '@officeskill/UPDATE_OFFICE_SKILL',
        payload: object,
        resolve
    };
}

export function deleteOfficeSkillRequest(id, resolve) {
    return {
        type: '@officeskill/DELETE_OFFICE_SKILL',
        payload: { id },
        resolve
    };
}
