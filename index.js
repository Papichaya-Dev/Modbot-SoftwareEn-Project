'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: "STlko4OTagWzkDjoJI6OsICDVTEovMBXuPih9C36UTzMXPvRIqaregh58YgWnZXiO0YpaIAzU1tsbleGsvN8ig5JBgaQf+4rn5McETv/AyaKAuUo7t0Wd1p8MZWVo+31YT3LyGXAVAw2hTT2jg1RzwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "b0043938acce0f0035f791c7421607fd",
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
  } else if (event.message.type === 'text' || event.message.text === "สวัสดี") {
    const payload = {
      type: 'text',
      text: "Modbot สวัสดีค่ะ/ครับ อยากทราบข้อมูลการเดินทางอะไร สอบถามได้เลย ~ ",
    };
    return client.replyMessage(event.replyToken, payload);
  }
}
//   // create a echoing text message
//   const echo = { type: 'text', text: event.message.text };

//   // use reply API
//   return client.replyMessage(event.replyToken, echo);
// }

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
