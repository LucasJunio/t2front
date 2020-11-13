import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    BLOCK: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@BLOCK/RETURN_BLOCK': {
        draft.BLOCK = action.payload.BLOCK;
        break;
      }
      default:
        return state;
    }
  });
}
