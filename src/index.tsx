import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { ConnectedApp } from './components/ConnectedApp'
import { reducers } from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

const domNode = document.querySelector('#root')
const jsxNode = (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

ReactDOM.render(jsxNode, domNode)
