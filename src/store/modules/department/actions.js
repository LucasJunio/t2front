export function addDepartmentRequest(object, resolve) {
    return {
        type: '@department/ADD_DEPARTMENT_REQUEST',
        payload: object,
        resolve
    };
}

export function readDepartmentRequest() {
    return {
        type: '@department/READ_DEPARTMENT'
    };
}

export function returnDepartmentRequest(department) {
    return {
        type: '@department/RETURN_DEPARTMENT',
        payload: { department }
    };
}

export function updateDepartmentRequest(object, resolve) {
    return {
        type: '@department/UPDATE_DEPARTMENT',
        payload: object,
        resolve
    };
}

export function deleteDepartmentRequest(id, resolve) {
    return {
        type: '@department/DELETE_DEPARTMENT',
        payload: { id },
        resolve
    };
}

export function foreignDepartmentRequest() {
    return {
        type: '@department/FOREIGN_DEPARTMENT',
    };
}

export function returnForeignDepartmentRequest(foreignDepartment) {
    return {
        type: '@department/RETURNFOREIGN_DEPARTMENT',
        payload: { foreignDepartment }
    };
}
