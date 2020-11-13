import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    connection: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@connection/RETURN_CONNECTION': {
        draft.connection = action.payload.connection;
        break;
      }
      default:
        return state;
    }
  });
}
