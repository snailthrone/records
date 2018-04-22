import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './components/App';

const app = new express();
const sheet = new ServerStyleSheet();
const markdown = renderToString(sheet.collectStyles(<App path='' />)) 
const styles = sheet.getStyleTags();

app.use('/', express.static(path.join(__dirname, '/../public')));
app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html>
        <head>
          <link rel="manifest" href="/manifest.json">
          <title>foo</title>
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
          <script type="text/javascript" src="js/bundle.js" async></script>
        </body>
      </html> 
  `)
});

app.listen(app.get('port'), () => console.log('Application running, port: ', app.get('port')))