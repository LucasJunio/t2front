export function addHistoryAnswerRequest(object, resolve) {
    return {
        type: '@historyanswer/ADD_HISTORYANSWER_REQUEST',
        payload: object,
        resolve
    };
}

export function readHistoryAnswerRequest() {
    return {
        type: '@historyanswer/READ_HISTORYANSWER'
    };
}

export function returnHistoryAnswerRequest(historyanswer) {
    return {
        type: '@historyanswer/RETURN_HISTORYANSWER',
        payload: { historyanswer }
    };
}

export function updateHistoryAnswerRequest(object, resolve) {
    return {
        type: '@historyanswer/UPDATE_HISTORYANSWER',
        payload: object,
        resolve
    };
}

export function deleteHistoryAnswerRequest(id, resolve) {
    return {
        type: '@historyanswer/DELETE_HISTORYANSWER',
        payload: { id },
        resolve
    };
}
