import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    pdi: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pdi/RETURN_PDI': {
        draft.pdi = action.payload.pdi;
        break;
      }
      default:
        return state;
    }
  });
}
