import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    extra: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@extra/RETURN_EXTRA': {
        draft.extra = action.payload.extra;
        break;
      }
      default:
        return state;
    }
  });
}
