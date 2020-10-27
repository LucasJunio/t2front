import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    contentskill: [],
    foreignContent: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contentskill/RETURN_CONTENT_SKILL': {
        draft.contentskill = action.payload;
        break;
      }
      case '@contentskill/RETURNFOREIGN_CONTENT_SKILL': {
        draft.foreignContent = action.payload.foreignContent;
        break;
      }
      default:
        return state;
    }
  });
}
