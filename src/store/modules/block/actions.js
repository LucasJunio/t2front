export function addBlockRequest(object, resolve) {
    return {
        type: '@block/ADD_BLOCK_REQUEST',
        payload: object,
        resolve
    };
}

export function readBlockRequest() {
    return {
        type: '@block/READ_BLOCK'
    };
}

export function returnBlockRequest(block) {
    return {
        type: '@block/RETURN_BLOCK',
        payload: { block }
    };
}

export function updateBlockRequest(object, resolve) {
    return {
        type: '@block/UPDATE_BLOCK',
        payload: object,
        resolve
    };
}

export function deleteBlockRequest(id, resolve) {
    return {
        type: '@block/DELETE_BLOCK',
        payload: { id },
        resolve
    };
}
