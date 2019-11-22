import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

var middleware = null
if (process.env.NODE_ENV !== 'production') {
    middleware = applyMiddleware(thunk, logger);
} else {
    middleware = applyMiddleware(thunk);

}

export default createStore(rootReducer, middleware);
