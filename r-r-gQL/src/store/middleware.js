import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const composeEnhancers = 
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//logger MUST be the last middleware in chain
export default composeEnhancers(applyMiddleware(thunk, logger));
