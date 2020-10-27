import produce from 'immer';

const INITIAL_STATE = {
    companytype: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@companytype/RETURN_COMPANYTYPE': {
        draft.companytype = action.payload.companytype;        
        break;
      }
      default:
        return state;
    }
  });
}
