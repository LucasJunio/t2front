import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    contentaudience: [],
    foreignContent: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contentaudience/RETURN_CONTENT_AUDIENCE': {
        draft.contentaudience = action.payload;
        break;
      }
      case '@contentaudience/RETURNFOREIGN_CONTENT_AUDIENCE': {
        draft.foreignContent = action.payload.foreignContent;
        break;
      }
      default:
        return state;
    }
  });
}
