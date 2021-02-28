import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = () => {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			<div>Here's a big list of users:</div>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

async function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	component: UsersList,
	loadData
};
