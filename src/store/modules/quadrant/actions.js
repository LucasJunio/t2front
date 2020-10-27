export function addQuadrantRequest(object, resolve) {
    return {
        type: '@quadrant/ADD_QUADRANT_REQUEST',
        payload: object,
        resolve
    };
}

export function readQuadrantRequest() {
    return {
        type: '@quadrant/READ_QUADRANT'
    };
}

export function returnQuadrantRequest(quadrant) {
    return {
        type: '@quadrant/RETURN_QUADRANT',
        payload: { quadrant }
    };
}

export function updateQuadrantRequest(object, resolve) {
    return {
        type: '@quadrant/UPDATE_QUADRANT',
        payload: object,
        resolve
    };
}

export function deleteQuadrantRequest(id, resolve) {
    return {
        type: '@quadrant/DELETE_QUADRANT',
        payload: { id },
        resolve
    };
}

export function foreignQuadrantRequest() {
    return {
        type: '@quadrant/FOREIGN_QUADRANT',
    };
}

export function returnForeignQuadrantRequest(foreignQuadrant) {
    return {
        type: '@quadrant/RETURNFOREIGN_QUADRANT',
        payload: { foreignQuadrant }
    };
}
