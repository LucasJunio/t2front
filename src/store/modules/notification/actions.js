export function addNotificationRequest(object, resolve) {
    return {
        type: '@notification/ADD_NOTIFICATION_REQUEST',
        payload: object,
        resolve
    };
}

export function readNotificationRequest() {
    return {
        type: '@notification/READ_NOTIFICATION'
    };
}

export function returnNotificationRequest(notification) {
    return {
        type: '@notification/RETURN_NOTIFICATION',
        payload: { notification }
    };
}

export function updateNotificationRequest(object, resolve) {
    return {
        type: '@notification/UPDATE_NOTIFICATION',
        payload: object,
        resolve
    };
}

export function deleteNotificationRequest(id, resolve) {
    return {
        type: '@notification/DELETE_NOTIFICATION',
        payload: { id },
        resolve
    };
}
