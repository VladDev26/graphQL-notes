import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';


render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app')
);




// render(
// 	<Provider store={store}>
// 		<Router history={hashHistory}>
// 			<Route path="/" component={App}>
// 				<Route path={'home'} component={Home} />
// 				<Route path={'news'} component={News} />
// 				<Route path={'sale'} component={Sale} />
// 			</Route>
// 		</Router>
// 	</Provider>
// 	, document.getElementById('app')
// );
