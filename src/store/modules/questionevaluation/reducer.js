import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    questionevaluation: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@questionevaluation/RETURN_QUESTION_EVALUATION': {
        draft.questionevaluation = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
