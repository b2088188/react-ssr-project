import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function requireAuthHOC(ChildComponent) {
	return function (props) {
		const auth = useSelector((state) => state.auth);
		switch (auth) {
			case false:
				// Redirect only works on client side
				return <Redirect to='/' />;
			case null:
				return <div>Loading...</div>;
			default:
				return <ChildComponent {...props} />;
		}
	};
}

export default requireAuthHOC;
