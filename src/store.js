import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/userLogin'
import { composeWithDevTools } from 'redux-devtools-extension';
const reduxThunk = require('redux-thunk').default

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;
