import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    historyanswer: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@historyanswer/RETURN_HISTORYANSWER': {
        draft.historyanswer = action.payload.historyanswer;
        break;
      }
      default:
        return state;
    }
  });
}
