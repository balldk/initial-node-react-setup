import App from './containers/App.js'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()