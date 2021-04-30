import { createStore, applyMiddleware, compose } from 'redux'
import todoReducer from '../Reducer/Todo'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

const store = createStore(todoReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store