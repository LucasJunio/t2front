import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    sublevel: [],
    foreignSublevel: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@sublevel/RETURN_SUBLEVEL': {
        draft.sublevel = action.payload.sublevel;        
        break;
      }

      case '@sublevel/RETURNFOREIGN_SUBLEVEL': {
        draft.foreignSublevel = action.payload.foreignSublevel;        
        break;
      }
      default:
        return state;
    }
  });
}
