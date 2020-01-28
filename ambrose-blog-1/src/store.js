import { createStore, applyMiddleware } from 'redux'
import postReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(postReducer, applyMiddleware(thunk))

export default store