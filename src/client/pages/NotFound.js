import React from 'react';

const NotFound = ({
	// This context won't exist in the browser,
	// only static router implement this
	staticContext = {}
}) => {
	staticContext.notFound = true;
	return <h1>Oops, Route not found.</h1>;
};

export default {
	component: NotFound
};
