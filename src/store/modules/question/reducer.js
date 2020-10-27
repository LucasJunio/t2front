import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    question: [],
    foreignQuestion: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@question/RETURN_QUESTION': {
        draft.question = action.payload.question;
        break;
      }

      case '@question/RETURNFOREIGN_QUESTION': {
        draft.foreignQuestion = action.payload.foreignQuestion;
        break;
      }
      default:
        return state;
    }
  });
}
