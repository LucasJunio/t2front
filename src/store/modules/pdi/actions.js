export function addPdiRequest(object, resolve) {
    return {
        type: '@pdi/ADD_PDI_REQUEST',
        payload: object,
        resolve
    };
}

export function readPdiRequest() {
    return {
        type: '@pdi/READ_PDI'
    };
}

export function returnPdiRequest(pdi) {
    return {
        type: '@pdi/RETURN_PDI',
        payload: { pdi }
    };
}

export function updatePdiRequest(object, resolve) {
    return {
        type: '@pdi/UPDATE_PDI',
        payload: object,
        resolve
    };
}

export function deletePdiRequest(id, resolve) {
    return {
        type: '@pdi/DELETE_PDI',
        payload: { id },
        resolve
    };
}
