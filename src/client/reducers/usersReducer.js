import { FETCH_USERS } from '../actions';

function usersReducer(currentState = [], action) {
   switch (action.type) {
      case FETCH_USERS:
         return action.payload.data;
      default:
         return currentState;
   }
}

export default usersReducer;
