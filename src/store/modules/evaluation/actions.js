export function addEvaluationRequest(object, resolve) {
    return {
        type: '@evaluation/ADD_EVALUATION_REQUEST',
        payload: object,
        resolve
    };
}

export function readEvaluationRequest() {
    return {
        type: '@evaluation/READ_EVALUATION'
    };
}

export function returnEvaluationRequest(evaluation) {
    return {
        type: '@evaluation/RETURN_EVALUATION',
        payload: { evaluation }
    };
}

export function updateEvaluationRequest(object, resolve) {
    return {
        type: '@evaluation/UPDATE_EVALUATION',
        payload: object,
        resolve
    };
}

export function deleteEvaluationRequest(id, resolve) {
    return {
        type: '@evaluation/DELETE_EVALUATION',
        payload: { id },
        resolve
    };
}

export function foreignEvaluationRequest() {
    return {
        type: '@evaluation/FOREIGN_EVALUATION',
    };
}

export function returnForeignEvaluationRequest(foreignEvaluation) {
    return {
        type: '@evaluation/RETURNFOREIGN_EVALUATION',
        payload: { foreignEvaluation }
    };
}
