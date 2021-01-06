import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    vehicles: []
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@vehicles/RETURN_VEHICLES': {
        draft.vehicles = action.payload.vehicles;
        break;
      }
      default:
        return state;
    }
  });
}
