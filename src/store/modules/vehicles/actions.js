export function addVehiclesRequest(object, resolve) {
    return {
        type: '@vehicles/ADD_VEHICLES_REQUEST',
        payload: object,
        resolve
    };
}

export function readVehiclesRequest() {
    return {
        type: '@vehicles/READ_VEHICLES'
    };
}

export function returnVehiclesRequest(vehicles) {
    return {
        type: '@vehicles/RETURN_VEHICLES',
        payload: { vehicles }
    };
}

export function updateVehiclesRequest(object, resolve) {
    return {
        type: '@vehicles/UPDATE_VEHICLES',
        payload: object,
        resolve
    };
}

export function deleteVehiclesRequest(id, resolve) {
    return {
        type: '@vehicles/DELETE_VEHICLES',
        payload: { id },
        resolve
    };
}
