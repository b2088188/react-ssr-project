import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const app = express();

app.use(
	'/api',
	proxy('http://react-ssr-api.herokuapp.com', {
		proxyReqOptDecorator(opts) {
			// API server looks this header, if it exist it will attempt to redirect the user back to a localhost 3000 after OAuth
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts;
		}
	})
);
app.use(express.static('public'));
// Accept all route request, and delegate to React Router
app.get('*', (req, res) => {
	const store = createStore(req);
	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		// If the component has loadData function, call it and return the promise
		return route.loadData ? route.loadData(store) : null;
	});
	// Once the promise resolved, this means our data loading has finished.
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);
		const statusCode = context.notFound ? 404 : 200;
		// Send back content to browser, and the bundle file for React application
		res.status(statusCode).send(content);
	});
});

export default app;
