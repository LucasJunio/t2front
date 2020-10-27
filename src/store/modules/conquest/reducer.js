import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    conquest: [],
    foreignConquest: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@conquest/RETURN_CONQUEST': {
        draft.conquest = action.payload.conquest;        
        break;
      }

      case '@conquest/RETURNFOREIGN_CONQUEST': {
        draft.foreignConquest = action.payload.foreignConquest;        
        break;
      }
      default:
        return state;
    }
  });
}
