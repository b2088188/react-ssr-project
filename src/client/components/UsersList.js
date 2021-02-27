import React, { useEffect } from 'react';
import { useUser } from '../context/user/userContext';
import { fetchUsers } from '../context/user/UserProvider';

const UsersList = () => {
	const { users, dispatch } = useUser();

	useEffect(() => {
		fetchUsers(dispatch);
	}, [dispatch]);

	return (
		<div>
			<div>Here's a big list of users:</div>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
};

export default UsersList;
