import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    event: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@event/RETURN_EVENT': {
        draft.event = action.payload.event;
        break;
      }
      default:
        return state;
    }
  });
}
