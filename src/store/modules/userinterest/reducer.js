import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    userinterest: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@userinterest/RETURN_USER_INTEREST': {
        draft.userinterest = action.payload.userinterest;
        break;
      }
      default:
        return state;
    }
  });
}
