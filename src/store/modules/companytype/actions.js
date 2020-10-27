export function addCompanyTypeRequest(object, resolve) {
    return {
        type: '@companytype/ADD_COMPANYTYPE_REQUEST',
        payload: object,
        resolve
    };
}

export function readCompanyTypeRequest() {
    return {
        type: '@companytype/READ_COMPANYTYPE'
    };
}

export function returnCompanyTypeRequest(companytype) {
    return {
        type: '@companytype/RETURN_COMPANYTYPE',
        payload: { companytype }
    };
}

export function updateCompanyTypeRequest(object, resolve) {
    return {
        type: '@companytype/UPDATE_COMPANYTYPE',
        payload: object,
        resolve
    };
}

export function deleteCompanyTypeRequest(id, resolve) {
    return {
        type: '@companytype/DELETE_COMPANYTYPE',
        payload: { id },
        resolve
    };
}
