import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    resultrepresentational: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@resultrepresentational/RETURN_RESULT_REPRESENTATIONAL': {
        draft.resultrepresentational = action.payload.resultrepresentational;
        break;
      }
      default:
        return state;
    }
  });
}
