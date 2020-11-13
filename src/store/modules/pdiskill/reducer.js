import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    pdiskill: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pdiskill/RETURN_PDI_SKIL': {
        draft.pdiskill = action.payload.pdiskill;
        break;
      }
      default:
        return state;
    }
  });
}
