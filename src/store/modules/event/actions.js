export function addEventRequest(object, resolve) {
    return {
        type: '@event/ADD_EVENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readEventRequest() {
    return {
        type: '@event/READ_EVENT'
    };
}

export function returnEventRequest(event) {
    return {
        type: '@event/RETURN_EVENT',
        payload: { event }
    };
}

export function updateEventRequest(object, resolve) {
    return {
        type: '@event/UPDATE_EVENT',
        payload: object,
        resolve
    };
}

export function deleteEventRequest(id, resolve) {
    return {
        type: '@event/DELETE_EVENT',
        payload: { id },
        resolve
    };
}
