import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    notification: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notification/RETURN_NOTIFICATION': {
        draft.notification = action.payload.notification;
        break;
      }
      default:
        return state;
    }
  });
}
