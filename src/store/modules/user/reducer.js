import produce from 'immer';
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const INITIAL_STATE = {
    user: [],
    foreignUser: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/RETURN_USER': {
        draft.user = action.payload.user;        
        break;
      }

      case '@user/RETURNFOREIGN_USER': {
        draft.foreignUser = action.payload.foreignUser;        
        break;
      }
      default:
        return state;
    }
  });
}



// import produce from 'immer';

// const INITIAL_STATE = {
//     user: []
// };

// export default function auth(state = INITIAL_STATE, action) {
//   return produce(state, draft => {
//     switch (action.type) {
//       case '@user/RETURN_USER': {
//         draft.name = action.payload.name;
//         draft.email = action.payload.email;
//         draft.type = action.payload.type;
//         break;
//       }
//       default:
//         return state;
//     }
//   });
// }
