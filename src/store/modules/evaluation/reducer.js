import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    evaluation: [],
    foreignEvaluation: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@evaluation/RETURN_EVALUATION': {
        draft.evaluation = action.payload.evaluation;
        break;
      }

      case '@evaluation/RETURNFOREIGN_EVALUATION': {
        draft.foreignEvaluation = action.payload.foreignEvaluation;
        break;
      }
      default:
        return state;
    }
  });
}
