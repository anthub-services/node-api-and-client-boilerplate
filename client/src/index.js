import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './Redux/Reducers'
import Routes from './Components/Routes'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Styles/Style.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker()
