import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import UserProvider from '../client/context/user/UserProvider';

function renderer(req) {
	const template = renderToString(
		<UserProvider>
			<Router location={req.path} context={{}}>
				<div>{renderRoutes(Routes)}</div>
			</Router>
		</UserProvider>
	);
	return `<html>
	<head></head>
	<body>
		<div id = 'root'>${template}</div>
		<script src = 'bundle.js'>
		</script>
	</body>
	</html>`;
}

export default renderer;
