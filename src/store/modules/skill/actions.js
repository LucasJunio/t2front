export function addSkillRequest(object, resolve) {
    return {
        type: '@skill/ADD_SKILL_REQUEST',
        payload: object,
        resolve
    };
}

export function readSkillRequest() {
    return {
        type: '@skill/READ_SKILL'
    };
}

export function returnSkillRequest(skill) {
    return {
        type: '@skill/RETURN_SKILL',
        payload: { skill }
    };
}

export function updateSkillRequest(object, resolve) {
    return {
        type: '@skill/UPDATE_SKILL',
        payload: object,
        resolve
    };
}

export function deleteSkillRequest(id, resolve) {
    return {
        type: '@skill/DELETE_SKILL',
        payload: { id },
        resolve
    };
}

export function foreignSkillRequest() {
    return {
        type: '@skill/FOREIGN_SKILL',
    };
}

export function returnForeignSkillRequest(foreignSkill) {
    return {
        type: '@skill/RETURNFOREIGN_SKILL',
        payload: { foreignSkill }
    };
}
