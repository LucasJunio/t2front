import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    feedback: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@feedback/RETURN_FEEDBACK': {
        draft.feedback = action.payload.feedback;
        break;
      }
      default:
        return state;
    }
  });
}
