export function addFeedbackRequest(object, resolve) {
    return {
        type: '@feedback/ADD_FEEDBACK_REQUEST',
        payload: object,
        resolve
    };
}

export function readFeedbackRequest() {
    return {
        type: '@feedback/READ_FEEDBACK'
    };
}

export function returnFeedbackRequest(feedback) {
    return {
        type: '@feedback/RETURN_FEEDBACK',
        payload: { feedback }
    };
}

export function updateFeedbackRequest(object, resolve) {
    return {
        type: '@feedback/UPDATE_FEEDBACK',
        payload: object,
        resolve
    };
}

export function deleteFeedbackRequest(id, resolve) {
    return {
        type: '@feedback/DELETE_FEEDBACK',
        payload: { id },
        resolve
    };
}
