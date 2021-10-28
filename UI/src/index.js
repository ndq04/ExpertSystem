import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import CarContextProvider from './contexts/CarContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
