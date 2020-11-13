import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    usergroup: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@usergroup/RETURN_USER_GROUP': {
        draft.usergroup = action.payload.usergroup;
        break;
      }
      default:
        return state;
    }
  });
}
