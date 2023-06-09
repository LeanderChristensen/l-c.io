import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="main">
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
