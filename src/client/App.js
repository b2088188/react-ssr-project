import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

// The route contains collection of components that we need to render
const App = ({ route }) => {
	return (
		<div>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	);
};

export default {
	component: App
};
