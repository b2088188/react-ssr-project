import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// The code is executed on browser side,
// There's already content rendered from the server inside the div,
// We're not replacing existing HTML, we just set up all event handlers and some necessary code.
// So we need to use hydrate rather than render.
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
