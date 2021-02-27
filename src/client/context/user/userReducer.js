import { REQUEST_LOADING, REQUEST_SUCCESS, REQUEST_FAIL } from '../types';

function userReducer(currentState, action) {
	switch (action.type) {
		case REQUEST_LOADING:
			return {
				...currentState,
				status: 'pending'
			};
		case REQUEST_SUCCESS:
			return {
				...currentState,
				status: 'resolved',
				users: action.payload.users,
				error: null
			};
		case REQUEST_FAIL:
			return {
				...currentState,
				status: 'rejected'
			};
		default:
			return currentState;
	}
}

export default userReducer;
