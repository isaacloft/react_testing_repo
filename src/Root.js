import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'reducers/index';

export default ({ children, initialState = {} }) => {
	const store = createStore(
		reducers,
		initialState,
		composeWithDevTools(
			applyMiddleware(reduxPromise),
		),
	);
	return <Provider store={store}>{children}</Provider>;
};
