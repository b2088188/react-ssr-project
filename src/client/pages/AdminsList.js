import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

const AdminsList = () => {
	const admins = useSelector((state) => state.admins);
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAdmins());
	}, [dispatch]);

	return (
		<div>
			<h3>Protected list of admins</h3>
			<ul>
				{admins.map((admin) => {
					return <li key={admin.id}>{admin.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default {
	component: requireAuth(AdminsList),
	loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
