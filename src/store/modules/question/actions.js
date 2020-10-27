export function addQuestionRequest(object, resolve) {
    console.log('add question request ', object);
    return {
        type: '@question/ADD_QUESTION_REQUEST',
        payload: object,
        resolve
    };
}

export function readQuestionRequest() {
    return {
        type: '@question/READ_QUESTION'
    };
}

export function returnQuestionRequest(question) {
    return {
        type: '@question/RETURN_QUESTION',
        payload: { question }
    };
}

export function updateQuestionRequest(object, resolve) {
    return {
        type: '@question/UPDATE_QUESTION',
        payload: object,
        resolve
    };
}

export function deleteQuestionRequest(id, resolve) {
    return {
        type: '@question/DELETE_QUESTION',
        payload: { id },
        resolve
    };
}

export function foreignQuestionRequest() {
    return {
        type: '@question/FOREIGN_QUESTION',
    };
}

export function returnForeignQuestionRequest(foreignQuestion) {
    return {
        type: '@question/RETURNFOREIGN_QUESTION',
        payload: { foreignQuestion }
    };
}
