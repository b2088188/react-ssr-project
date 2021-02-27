import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './client/components/Home.js';
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
	const content = ReactDOMServer.renderToString(<Home />);
	const markup = `<html>
	<head></head>
	<body>
		<div id = 'root'>${content}</div>
		<script src = 'bundle.js'></script>
	</body>
	</html>`;
	// Send back content to browser, and the bundle file for React application
	res.send(markup);
});

export default app;
