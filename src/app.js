import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './client/components/Home.js';
const app = express();

app.get('/', (req, res) => {
	const content = ReactDOMServer.renderToString(<Home />);
	res.send(content);
});

export default app;
