import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    officehistory: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@officehistory/RETURN_OFFICE_HISTORY': {
        draft.officehistory = action.payload.officehistory;
        break;
      }
      default:
        return state;
    }
  });
}
