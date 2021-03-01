import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/Routes';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

function renderer(req, store, context) {
	const template = renderToString(
		<Provider store={store}>
			<Router location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</Router>
		</Provider>
	);

	const helmet = Helmet.renderStatic();

	return `<html>
	<head>
	${String(helmet.title)}
	${String(helmet.meta)}
	 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
	</head>
	<body>
		<div id = 'root'>${template}</div>
		<script>
		window.INITIAL_STATE = ${serialize(store.getState())}
		</script>
		<script src = 'bundle.js'>
		</script>
	</body>
	</html>`;
}

export default renderer;
