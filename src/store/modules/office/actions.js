export function addOfficeRequest(object, resolve) {
    return {
        type: '@office/ADD_OFFICE_REQUEST',
        payload: object,
        resolve
    };
}

export function readOfficeRequest() {
    return {
        type: '@office/READ_OFFICE'
    };
}

export function returnOfficeRequest(office) {
    return {
        type: '@office/RETURN_OFFICE',
        payload: { office }
    };
}

export function updateOfficeRequest(object, resolve) {
    return {
        type: '@office/UPDATE_OFFICE',
        payload: object,
        resolve
    };
}

export function deleteOfficeRequest(id, resolve) {
    return {
        type: '@office/DELETE_OFFICE',
        payload: { id },
        resolve
    };
}

export function returnForeignOfficeRequest(foreignOffice) {
    return {
        type: '@office/RETURNFOREIGN_OFFICE',
        payload: { foreignOffice }
    };
}
