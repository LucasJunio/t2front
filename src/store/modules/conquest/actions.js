export function addConquestRequest(object, resolve) {
    return {
        type: '@conquest/ADD_CONQUEST_REQUEST',
        payload: object,
        resolve
    };
}

export function readConquestRequest() {
    return {
        type: '@conquest/READ_CONQUEST'
    };
}

export function returnConquestRequest(conquest) {
    return {
        type: '@conquest/RETURN_CONQUEST',
        payload: { conquest }
    };
}

export function updateConquestRequest(object, resolve) {
    return {
        type: '@conquest/UPDATE_CONQUEST',
        payload: object,
        resolve
    };
}

export function deleteConquestRequest(id, resolve) {
    return {
        type: '@conquest/DELETE_CONQUEST',
        payload: { id },
        resolve
    };
}

export function foreignConquestRequest() {
    return {
        type: '@conquest/FOREIGN_CONQUEST',
    };
}

export function returnForeignConquestRequest(foreignConquest) {
    return {
        type: '@conquest/RETURNFOREIGN_CONQUEST',
        payload: { foreignConquest }
    };
}
