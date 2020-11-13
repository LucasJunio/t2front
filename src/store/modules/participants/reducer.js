import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    participants: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@participants/RETURN_PARTICIPANTS': {
        draft.participants = action.payload.participants;
        break;
      }
      default:
        return state;
    }
  });
}
