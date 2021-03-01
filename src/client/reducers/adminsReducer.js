import { FETCH_ADMINS } from '../actions';

function adminsReducer(currentState = [], action) {
   switch (action.type) {
      case FETCH_ADMINS:
         return action.payload.data;
      default:
         return currentState;
   }
}

export default adminsReducer;
