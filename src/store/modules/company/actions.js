export function addCompanyRequest(object, resolve) {
    return {
        type: '@company/ADD_COMPANY_REQUEST',
        payload: object,
        resolve
    };
}

export function readCompanyRequest() {
    return {
        type: '@company/READ_COMPANY'
    };
}

export function returnCompanyRequest(company) {
    return {
        type: '@company/RETURN_COMPANY',
        payload: company
    };
}

export function updateCompanyRequest(object, resolve) {
    return {
        type: '@company/UPDATE_COMPANY',
        payload: object,
        resolve
    };
}

export function deleteCompanyRequest(id, resolve) {
    return {
        type: '@company/DELETE_COMPANY',
        payload: { id },
        resolve
    };
}
