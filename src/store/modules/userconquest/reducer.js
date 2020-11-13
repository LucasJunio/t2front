import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    userconquest: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@userconquest/RETURN_USERCONQUEST': {
        draft.userconquest = action.payload.userconquest;
        break;
      }
      default:
        return state;
    }
  });
}
