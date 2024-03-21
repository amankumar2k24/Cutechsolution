import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
// import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      {/* <HelmetProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </HelmetProvider> */}
    </React.StrictMode>
  )
  return { html }
}
