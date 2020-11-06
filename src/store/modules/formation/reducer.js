import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    formation: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@formation/RETURN_FORMATION': {
        draft.formation = action.payload.formation;
        break;
      }
      default:
        return state;
    }
  });
}
