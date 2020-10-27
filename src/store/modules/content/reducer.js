import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    content: [],
    foreignContent: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@content/RETURN_CONTENT': {
        draft.content = action.payload.content;        
        break;
      }

      case '@content/RETURNFOREIGN_CONTENT': {
        draft.foreignContent = action.payload.foreignContent;        
        break;
      }
      default:
        return state;
    }
  });
}
