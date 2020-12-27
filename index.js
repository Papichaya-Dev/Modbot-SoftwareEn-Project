'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: "FojClx0hUgNwC+DyfOMfb9OIJK8ZA730gNrBkJ6+xZL2beo3Bm/De0d/X1xKdiziO0YpaIAzU1tsbleGsvN8ig5JBgaQf+4rn5McETv/AyZk6Wlz3pNGqs7yX5Y8AyDI/YW9HdcHIM+kwLCwfBhx4AdB04t89/1O/w1cDnyilFU="
  channelSecret: "26ddf9915eb6366b7e8b0ad718e2e11c",
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
