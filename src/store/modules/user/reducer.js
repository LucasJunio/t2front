import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    user: [],
    token: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/RETURN_USER': {
        draft.user = action.payload.user;
        break;
      }
      case '@user/GET_JWT_USER': {
        draft.token = [{"token":action.payload.jwt}];
        break;
      }
      default:
        return state;
    }
  });
}
