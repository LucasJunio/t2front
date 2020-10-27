import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    segment: [],
    foreignSegment: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@segment/RETURN_SEGMENT': {
        draft.segment = action.payload.segment;        
        break;
      }
      case '@segment/RETURNFOREIGN_SEGMENT': {
        draft.foreignSegment = action.payload.foreignSegment;        
        break;
      }
      default:
        return state;
    }
  });
}
