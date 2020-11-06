import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    experience: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@experience/RETURN_EXPERIENCE': {
        draft.experience = action.payload.experience;
        break;
      }
      default:
        return state;
    }
  });
}
