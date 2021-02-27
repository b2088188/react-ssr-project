import express from 'express';
import renderer from './helpers/renderer';
const app = express();

app.use(express.static('public'));
// Accept all route request, and delegate to React Router
app.get('*', (req, res) => {
	// Send back content to browser, and the bundle file for React application
	res.send(renderer(req));
});

export default app;
