import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    company: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@company/RETURN_COMPANY': {
        draft.company = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
