import React from 'react'
import logo from './logo.svg' // eslint-disable-line no-unused-vars
import Home from './scenes/Home'
import {Helmet} from 'react-helmet'

import './App.css'
import 'styles/style.scss'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Helmet>
          <title>App Store</title>
        </Helmet>
        <Home />
      </div>
    )
  }
}

export default App
