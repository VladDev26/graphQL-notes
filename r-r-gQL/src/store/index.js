import { createStore } from 'redux';

import reducers from '../reducers';
import middleware from './middleware';


const initialState = {};

function configureStore(state) {
    return createStore(
        reducers,
        state,
       	middleware
    );
}

export default configureStore(initialState);