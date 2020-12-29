'use strict';
// Reply using AIML ( Artificial Intelligence Markup Language ), parsing data with AIMLParser
// applied NLP and Machince Learning
const line = require('@line/bot-sdk');
const express = require('express');
const AIMLParser = require('aimlparser');
const bodyParser = require('body-parser');
const request = require('request');
const feedparser = require('feedparser-promised');

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
const aimlParser = new AIMLParser({ name:'MODBOT' })
aimlParser.load(['./test-aiml.xml'])

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
  } else if (event.message.type === 'text' && event.message.text === "สวัสดี") {
    const payload = {
      type: 'text',
      text: "Modbot สวัสดีค่ะ อยากทราบข้อมูลการเดินทางอะไร สอบถามได้เลย ~ ",
    };
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === "Ngrok"){
    const payload = {
      type: 'text',
      text: "NGROK Is Worked ",
    };
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === "สอบถาม") {
    const payload = {
      type: 'text',
      text: "อยากจะไปที่ไหนดีคะ ~ ",
    };
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === "พระราม3") {
    const payload = {
      type: 'text',
      text: "ขอโทษด้วยนะคะ ระบบยังไม่รองรับข้อมูลค่ะ ~ ",
    };
    return client.replyMessage(event.replyToken, payload);
  } else if (event.message.type === 'text' && event.message.text === "อัปเดต") {
    const payload = {
      type: 'text',
      text: "ขอโทษด้วยนะคะ ระบบยังไม่รองรับข้อมูลค่ะ ~ ",
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

console.log("Test Ju ")