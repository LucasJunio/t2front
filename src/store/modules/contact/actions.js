export function addContactRequest(object, resolve) {
    return {
        type: '@contact/ADD_CONTACT_REQUEST',
        payload: object,
        resolve
    };
}

export function readContactRequest(id_company) {
    return {
        type: '@contact/READ_CONTACT',
        payload: {id_company}
    };
}

export function returnContactRequest(contact) {
    return {
        type: '@contact/RETURN_CONTACT',
        payload: contact
    };
}

export function updateContactRequest(object, resolve) {
    return {
        type: '@contact/UPDATE_CONTACT',
        payload: object,
        resolve
    };
}

export function deleteContactRequest(id, resolve) {
    return {
        type: '@contact/DELETE_CONTACT',
        payload: { id },
        resolve
    };
}
