import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
const app = express();

app.use(express.static('public'));
// Accept all route request, and delegate to React Router
app.get('*', (req, res) => {
	console.log(matchRoutes(Routes, req.path));
	// Send back content to browser, and the bundle file for React application
	res.send(renderer(req));
});

export default app;
