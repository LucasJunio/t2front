import produce from 'immer';

import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    office: [],
    foreignOffice: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@office/RETURN_OFFICE': {
        draft.office = action.payload.office;        
        break;
      }
      case '@office/RETURNFOREIGN_OFFICE': {
        draft.foreignOffice = action.payload.foreignOffice;        
        break;
      }
      default:
        return state;
    }
  });
}
