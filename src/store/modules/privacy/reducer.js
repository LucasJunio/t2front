import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    privacy: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@privacy/RETURN_PRIVACY': {
        draft.privacy = action.payload.privacy;
        break;
      }
      default:
        return state;
    }
  });
}
