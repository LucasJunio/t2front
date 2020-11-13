import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    usercontent: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@usercontent/RETURN_USER_CONTENT': {
        draft.usercontent = action.payload.usercontent;
        break;
      }
      default:
        return state;
    }
  });
}
