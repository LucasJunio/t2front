import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    skilluser: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@skilluser/RETURN_SKILLUSER': {
        draft.skilluser = action.payload.skilluser;
        break;
      }
      default:
        return state;
    }
  });
}
