export function addSublevelSkillRequest(object, resolve) {
    return {
        type: '@sublevelskill/ADD_SUBLEVEL_SKILL_REQUEST',
        payload: object,
        resolve
    };
}

export function readSublevelSkillRequest(id, resolve = () => {}) {
    return {
        type: '@sublevelskill/READ_SUBLEVEL_SKILL',
        payload: id,
        resolve
    };
}

export function returnSublevelSkillRequest(object) {
    return {
        type: '@sublevelskill/RETURN_SUBLEVEL_SKILL',
        payload: object
    };
}

export function updateSublevelSkillRequest(object, resolve) {
    return {
        type: '@sublevelskill/UPDATE_SUBLEVEL_SKILL',
        payload: object,
        resolve
    };
}

export function deleteSublevelSkillRequest(id, resolve) {
    return {
        type: '@sublevelskill/DELETE_SUBLEVEL_SKILL',
        payload: { id },
        resolve
    };
}

export function foreignSublevelSkillRequest() {
    return {
        type: '@sublevelskill/FOREIGN_SUBLEVEL_SKILL',
    };
}

export function returnForeignSublevelSkillRequest(foreignSublevelSkill) {
    return {
        type: '@sublevelskill/RETURNFOREIGN_SUBLEVEL_SKILL',
        payload: { foreignSublevelSkill }
    };
}
