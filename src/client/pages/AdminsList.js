import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdmins } from '../actions';

const AdminsList = () => {
	const admins = useSelector((state) => state.admins);
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
	component: AdminsList,
	loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
