import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    quadrant: [],
    foreignQuadrant: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@quadrant/RETURN_QUADRANT': {
        draft.quadrant = action.payload.quadrant;        
        break;
      }

      case '@quadrant/RETURNFOREIGN_QUADRANT': {
        draft.foreignQuadrant = action.payload.foreignQuadrant;        
        break;
      }
      default:
        return state;
    }
  });
}
