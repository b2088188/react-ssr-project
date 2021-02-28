import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

function renderer(req, store) {
	const template = renderToString(
		<Provider store={store}>
			<Router location={req.path} context={{}}>
				<div>{renderRoutes(Routes)}</div>
			</Router>
		</Provider>
	);
	return `<html>
	<head></head>
	<body>
		<div id = 'root'>${template}</div>
		<script>
		window.INITIAL_STATE = ${JSON.stringify(store.getState())}
		</script>
		<script src = 'bundle.js'>
		</script>
	</body>
	</html>`;
}

export default renderer;
