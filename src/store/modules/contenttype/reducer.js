import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    contenttype: [],
    foreignContentType: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contenttype/RETURN_CONTENTTYPE': {
        draft.contenttype = action.payload.contenttype;        
        break;
      }

      case '@contenttype/RETURNFOREIGN_CONTENTTYPE': {
        draft.foreignContentType = action.payload.foreignContentType;        
        break;
      }

      default:
        return state;
    }
  });
}
