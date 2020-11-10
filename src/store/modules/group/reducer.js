import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    group: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@group/RETURN_GROUP': {
        draft.group = action.payload.group;
        break;
      }
      default:
        return state;
    }
  });
}
