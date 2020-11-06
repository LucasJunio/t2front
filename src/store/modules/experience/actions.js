export function addExperienceRequest(object, resolve) {
    return {
        type: '@experience/ADD_EXPERIENCE_REQUEST',
        payload: object,
        resolve
    };
}

export function readExperienceRequest() {
    return {
        type: '@experience/READ_EXPERIENCE'
    };
}

export function returnExperienceRequest(experience) {
    return {
        type: '@experience/RETURN_EXPERIENCE',
        payload: { experience }
    };
}

export function updateExperienceRequest(object, resolve) {
    return {
        type: '@experience/UPDATE_EXPERIENCE',
        payload: object,
        resolve
    };
}

export function deleteExperienceRequest(id, resolve) {
    return {
        type: '@experience/DELETE_EXPERIENCE',
        payload: { id },
        resolve
    };
}
