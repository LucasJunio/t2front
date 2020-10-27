export function addContentDepartmentRequest(object, resolve) {
    return {
        type: '@contentdepartment/ADD_CONTENT_DEPARTMENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readContentDepartmentRequest(id, resolve = () => {}) {
    return {
        type: '@contentdepartment/READ_CONTENT_DEPARTMENT',
        payload: id,
        resolve
    };
}

export function returnContentDepartmentRequest(object) {
    return {
        type: '@contentdepartment/RETURN_CONTENT_DEPARTMENT',
        payload: object
    };
}

export function updateContentDepartmentRequest(object, resolve) {
    return {
        type: '@contentdepartment/UPDATE_CONTENT_DEPARTMENT',
        payload: object,
        resolve
    };
}

export function deleteContentDepartmentRequest(id, resolve) {
    return {
        type: '@contentdepartment/DELETE_CONTENT_DEPARTMENT',
        payload: { id },
        resolve
    };
}
