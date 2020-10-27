import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    officeskill: [],
    foreignOffice: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@officeskill/RETURN_OFFICE_SKILL': {
        draft.officeskill = action.payload;
        break;
      }
      case '@officeskill/RETURNFOREIGN_OFFICE_SKILL': {
        draft.foreignOffice = action.payload.foreignOffice;        
        break;
      }
      default:
        return state;
    }
  });
}
