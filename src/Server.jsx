/* eslint no-console: 0 */ // --> OFF
import compression from 'compression'
import Express from 'express'
import helmet from 'helmet'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import App from './components/App/App'

const app = new Express()

const sheet = new ServerStyleSheet()
const markdown = renderToString(sheet.collectStyles(<App path="" />))
const styles = sheet.getStyleTags()

const shouldCompress = (request, result) => {
  if (request.headers['x-no-compression']) {
    return false
  }
  return compression.filter(request, result)
}

app.use(compression({ filter: shouldCompress }))
app.use(helmet())
app.use('/', Express.static(path.join(__dirname, '/../public')))
app.set('port', (process.env.PORT || 8080))

const letsEncryptReponse = process.env.CERTBOT_RESPONSE

app.get('/.well-known/acme-challenge/:content', (request, result) => result.send(letsEncryptReponse))

app.get('/', (request, result) => {
  result.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Records</title>
          <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico">
          <meta name="author" content="Eemeli Martti">
          <meta name="description" content="Records">
          <meta name="theme-color" content="#222222">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="manifest" href="/manifest.json">
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
            }
          </style>
          ${styles}
        </head>
        <body>
          <div id="app">${markdown}</div>
          <script type="text/javascript" src="app.js" async></script>
        </body>
      </html>
  `)
})

app.listen(app.get('port'), () => console.log('Application running, port: ', app.get('port')))
