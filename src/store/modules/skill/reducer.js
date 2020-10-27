import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    skill: [],
    foreignSkill: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@skill/RETURN_SKILL': {
        draft.skill = action.payload.skill;        
        break;
      }

      case '@skill/RETURNFOREIGN_SKILL': {
        draft.foreignSkill = action.payload.foreignSkill;        
        break;
      }
      default:
        return state;
    }
  });
}
