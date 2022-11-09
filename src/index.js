import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './App'
import reducers from './reducers'

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider store={store}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
