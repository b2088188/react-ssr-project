import { FETCH_USERS } from '../actions';

export default (currentState = [], action) => {
   switch (action.type) {
      case FETCH_USERS:
         return action.payload.data;
      default:
         return currentState;
   }
};
