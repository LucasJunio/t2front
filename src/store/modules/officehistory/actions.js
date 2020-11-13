export function addOfficeHistoryRequest(object, resolve) {
    return {
        type: '@officehistory/ADD_OFFICE_HISTORY_REQUEST',
        payload: object,
        resolve
    };
}

export function readOfficeHistoryRequest() {
    return {
        type: '@officehistory/READ_OFFICE_HISTORY'
    };
}

export function returnOfficeHistoryRequest(officehistory) {
    return {
        type: '@officehistory/RETURN_OFFICE_HISTORY',
        payload: { officehistory }
    };
}

export function updateOfficeHistoryRequest(object, resolve) {
    return {
        type: '@officehistory/UPDATE_OFFICE_HISTORY',
        payload: object,
        resolve
    };
}

export function deleteOfficeHistoryRequest(id, resolve) {
    return {
        type: '@officehistory/DELETE_OFFICE_HISTORY',
        payload: { id },
        resolve
    };
}
