export function addSegmentRequest(object, resolve) {
    return {
        type: '@segment/ADD_SEGMENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readSegmentRequest() {
    return {
        type: '@segment/READ_SEGMENT'
    };
}

export function returnSegmentRequest(segment) {
    return {
        type: '@segment/RETURN_SEGMENT',
        payload: { segment }
    };
}

export function updateSegmentRequest(object, resolve) {
    return {
        type: '@segment/UPDATE_SEGMENT',
        payload: object,
        resolve
    };
}

export function deleteSegmentRequest(id, resolve) {
    return {
        type: '@segment/DELETE_SEGMENT',
        payload: { id },
        resolve
    };
}

export function foreignSegmentRequest() {
    return {
        type: '@segment/FOREIGN_SEGMENT',
    };
}

export function returnForeignSegmentRequest(foreignSegment) {
    return {
        type: '@segment/RETURNFOREIGN_SEGMENT',
        payload: { foreignSegment }
    };
}
