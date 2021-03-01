import { FETCH_CURRENT_USER } from '../actions';

function authReducer(currentState = null, action) {
	switch (action.type) {
		case FETCH_CURRENT_USER:
			return action.payload.data || false;
		default:
			return currentState;
	}
}

export default authReducer;
