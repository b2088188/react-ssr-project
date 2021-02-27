import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// The code is executed on browser side,
// There's already content rendered from the server inside the div,
// We're not replacing existing HTML, we just set up all event handlers and some necessary code.
// So we need to use hydrate rather than render.
ReactDOM.hydrate(
	<Router>
		<Routes />
	</Router>,
	document.querySelector('#root')
);
