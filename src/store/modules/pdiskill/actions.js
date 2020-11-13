export function addPdiSkillRequest(object, resolve) {
    return {
        type: '@pdiskill/ADD_PDI_SKILL_REQUEST',
        payload: object,
        resolve
    };
}

export function readPdiSkillRequest() {
    return {
        type: '@pdiskill/READ_PDI_SKILL'
    };
}

export function returnPdiSkillRequest(pdiskill) {
    return {
        type: '@pdiskill/RETURN_PDI_SKILL',
        payload: { pdiskill }
    };
}

export function updatePdiSkillRequest(object, resolve) {
    return {
        type: '@pdiskill/UPDATE_PDI_SKILL',
        payload: object,
        resolve
    };
}

export function deletePdiSkillRequest(id, resolve) {
    return {
        type: '@pdiskill/DELETE_PDI_SKILL',
        payload: { id },
        resolve
    };
}
