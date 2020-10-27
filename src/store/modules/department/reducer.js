import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    department: [],
    foreignDepartment: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@department/RETURN_DEPARTMENT': {
        draft.department = action.payload.department;        
        break;
      }

      case '@department/RETURNFOREIGN_DEPARTMENT': {
        draft.foreignDepartment = action.payload.foreignDepartment;        
        break;
      }
      default:
        return state;
    }
  });
}
