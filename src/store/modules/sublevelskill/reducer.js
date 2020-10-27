import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    sublevelskill: [],
    foreignSublevelSkill: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@sublevelskill/RETURN_SUBLEVEL_SKILL': {
        draft.sublevelskill = action.payload;
        break;
      }

      case '@sublevelskill/RETURNFOREIGN_SUBLEVELSKILL': {
        draft.foreignSublevelSkill = action.payload.foreignSublevelSkill;        
        break;
      }
      default:
        return state;
    }
  });
}
