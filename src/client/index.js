import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

// The code is executed on browser side,
// There's already content rendered from the server inside the div,
// We're not replacing existing HTML, we just set up all event handlers and some necessary code.
// So we need to use hydrate rather than render.
ReactDOM.hydrate(
	<Provider store={store}>
		<Router>
			<div>{renderRoutes(Routes)}</div>
		</Router>
	</Provider>,
	document.querySelector('#root')
);
