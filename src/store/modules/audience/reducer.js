import produce from 'immer';

const INITIAL_STATE = {
    audience: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@audience/RETURN_AUDIENCE': {
        draft.audience = action.payload.audience;        
        break;
      }
      default:
        return state;
    }
  });
}
