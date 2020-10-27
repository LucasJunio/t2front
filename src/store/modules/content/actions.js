export function addContentRequest(object, resolve) {
    return {
        type: '@content/ADD_CONTENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readContentRequest() {
    return {
        type: '@content/READ_CONTENT'
    };
}

export function returnContentRequest(content) {
    return {
        type: '@content/RETURN_CONTENT',
        payload: { content }
    };
}

export function updateContentRequest(object, resolve) {
    return {
        type: '@content/UPDATE_CONTENT',
        payload: object,
        resolve
    };
}

export function deleteContentRequest(id, resolve) {
    return {
        type: '@content/DELETE_CONTENT',
        payload: { id },
        resolve
    };
}

export function foreignContentRequest() {
    return {
        type: '@content/FOREIGN_CONTENT',
    };
}

export function returnForeignContentRequest(foreignContent) {
    return {
        type: '@content/RETURNFOREIGN_CONTENT',
        payload: { foreignContent }
    };
}
