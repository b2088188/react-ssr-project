import { FETCH_CURRENT_USER } from '../actions';

function authReducer(currentState = null, action) {
	switch (action.type) {
		case FETCH_CURRENT_USER:
			return {
				...currentState,
				user: action.payload.user ?? null
			};
		default:
			return currentState;
	}
}

export default authReducer;
