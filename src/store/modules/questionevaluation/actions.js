export function addQuestionEvaluationRequest(object, resolve) {
    return {
        type: '@questionevaluation/ADD_QUESTION_EVALUATION_REQUEST',
        payload: object,
        resolve
    };
}

export function readQuestionEvaluationRequest(id, resolve = () => {}) {
    return {
        type: '@questionevaluation/READ_QUESTION_EVALUATION',
        payload: id,
        resolve
    };
}

export function returnQuestionEvaluationRequest(object) {
    return {
        type: '@questionevaluation/RETURN_QUESTION_EVALUATION',
        payload: object
    };
}

export function updateQuestionEvaluationRequest(object, resolve) {
    return {
        type: '@questionevaluation/UPDATE_QUESTION_EVALUATION',
        payload: object,
        resolve
    };
}

export function deleteQuestionEvaluationRequest(id, resolve) {
    return {
        type: '@questionevaluation/DELETE_QUESTION_EVALUATION',
        payload: { id },
        resolve
    };
}