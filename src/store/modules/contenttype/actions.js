export function addContentTypeRequest(object, resolve) {
    return {
        type: '@contenttype/ADD_CONTENTTYPE_REQUEST',
        payload: object,
        resolve
    };
}

export function readContentTypeRequest() {
    return {
        type: '@contenttype/READ_CONTENTTYPE'
    };
}

export function returnContentTypeRequest(contenttype) {
    return {
        type: '@contenttype/RETURN_CONTENTTYPE',
        payload: { contenttype }
    };
}

export function updateContentTypeRequest(object, resolve) {
    return {
        type: '@contenttype/UPDATE_CONTENTTYPE',
        payload: object,
        resolve
    };
}

export function deleteContentTypeRequest(id, resolve) {
    return {
        type: '@contenttype/DELETE_CONTENTTYPE',
        payload: { id },
        resolve
    };
}

export function foreignContentTypeRequest() {
    return {
        type: '@contenttype/FOREIGN_CONTENTTYPE',
    };
}

export function returnForeignContentTypeRequest(foreignContentType) {
    return {
        type: '@contenttype/RETURNFOREIGN_CONTENTTYPE',
        payload: { foreignContentType }
    };
}
