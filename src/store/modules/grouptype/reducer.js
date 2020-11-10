import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    grouptype: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@grouptype/RETURN_GROUPTYPE': {
        draft.grouptype = action.payload.grouptype;
        break;
      }
      default:
        return state;
    }
  });
}
