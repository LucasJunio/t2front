import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    contentdepartment: [],
    foreignContent: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contentdepartment/RETURN_CONTENT_DEPARTMENT': {
        draft.contentdepartment = action.payload;
        break;
      }
      case '@contentdepartment/RETURNFOREIGN_CONTENT_DEPARTMENT': {
        draft.foreignContent = action.payload.foreignContent;
        break;
      }
      default:
        return state;
    }
  });
}
