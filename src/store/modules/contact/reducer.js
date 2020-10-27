import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    contacts: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contact/RETURN_CONTACT': {
        draft.contacts = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
