import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import axios from 'axios';
import { REQUEST_LOADING, REQUEST_SUCCESS, REQUEST_FAIL } from '../types';

const InitialState = {
	status: 'idle',
	users: [],
	error: null
};

export const fetchUsers = async (dispatch) => {
	try {
		dispatch({ type: REQUEST_LOADING });
		const { data } = await axios.get('http://react-ssr-api.herokuapp.com/users');
		dispatch({
			type: REQUEST_SUCCESS,
			payload: {
				users: data
			}
		});
	} catch (err) {}
};

const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, InitialState);
	const isIdle = state.status === 'idle';
	const isLoading = state.status === 'pending';
	const isSuccess = state.status === 'resolved';
	const isError = state.status === 'rejected';
	const value = {
		users: state.users,
		isIdle,
		isLoading,
		isSuccess,
		isError,
		dispatch
	};
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
