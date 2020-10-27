import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    interest: [],
    foreignInterest: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@interest/RETURN_INTEREST': {
        draft.interest = action.payload.interest;        
        break;
      }

      case '@interest/RETURNFOREIGN_INTEREST': {
        draft.foreignInterest = action.payload.foreignInterest;        
        break;
      }
      default:
        return state;
    }
  });
}
