import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    denunciation: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@denunciation/RETURN_DENUNCIATION': {
        draft.denunciation = action.payload.denunciation;
        break;
      }
      default:
        return state;
    }
  });
}
