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
  channelAccessToken: "8/nQcDP87i59lfeImmXTfxyQSF28MN9odZKOLFMK1LTaPydVXADb38+PYPOuxvufEQ62N89drGbso0aqwh2n4bjp1LMSmxqCKwzZa0jlYTmxn+QdKjHoYfzXGGGtalEQ77M3RrBCsRIqWRxO1CWzjgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "86cab6614d4eccefeb0503cbf936c45c",
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
app.post('/webhook', line.middleware(config), (req, res) => {
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

  // console.log(event);
  if (event.type === 'message' && event.message.type === 'text') {
      handleMessageEvent(event);
  } else {
      return Promise.resolve(null);
  }
}

function handleMessageEvent(event) {
  var msg = {
      type: 'text',
      text: "Modbot ยินดีให้บริการค๊า 🚌🙏✨          ลองพิมพ์คีย์เวิร์ดที่สนใจ เพื่อดูข้อมูลสิคะ          'จุดขึ้นรถ' 'สายรถ''ราคา' 'ประวัติ' "
  };

  var eventText = event.message.text.toLowerCase();

  if (eventText === 'สวัสดี') {
    msg = {
      type: 'text',
      text: "Modbot ยินดีให้บริการค๊า 🚌🙏✨          ลองพิมพ์คีย์เวิร์ดที่สนใจ เพื่อดูข้อมูลสิคะ          'จุดขึ้นรถ' 'สายรถ''ราคา' 'ประวัติ' "
    }
  } else if (eventText === 'สอบถาม') {
    msg = {
      type: 'text',
      text: "อยากจะไปที่ไหนดีคะ ~ "
    }
  } else if (eventText === 'พระราม3') {
    msg = {
      type: 'text',
      text: "ขอโทษด้วยนะคะ ระบบยังไม่รองรับข้อมูลค่ะ ~ "
    }
  } else if (eventText === 'อัปเดต') {
    msg = {
      type: 'text',
      text: "ทางเราจะทำการอัปเดตข้อมูลให้นะคะ ❤💐 ~  "
    }
    
  } else if (eventText === 'image') {
      msg = {
          'type': 'image',
          'originalContentUrl': 'https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100',
          'previewImageUrl': 'https://images.performgroup.com/di/library/GOAL/a6/bb/fifa-18-ronaldo_lx3r88bpjpk91re36ukdgomrj.jpg?t=2027563652&w=620&h=430'
      }
  } else if (eventText === 'จุดขึ้นรถ') {
      msg = [{
          "type": "location",
          "title": "จุดขึ้นรถใกล้ฉัน",
          "address": " คลิ๊กเพื่อดูจุดขึ้นรถใกล้คุณได้เลย 📍 ",
          "latitude": 13.664287668770813,
          "longitude": 100.43849161198395
        },
        {
          type: 'text',
          text: "อยากรู้ข้อมูลอะไรสามารถพิมพ์คีย์เวิร์ดตามนี้ได้เลย  ~ 'สายรถ' 'ประวัติ' 'ราคา' "
        }]
  } else if (eventText === 'ราคา') {
      msg = {
          "type": "template",
          "altText": "this is a buttons template",
          "template": {
              "type": "buttons",
              // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
              "title": "อัตราค่าโดยสาร",
              "text": "กรุณาเลือกประเภทรถโดยสาร",
              "actions": [{
                  "type": "postback",
                  "label": "รถเมล์",
                  "data": "action=buy&itemid=123"
              }, {
                  "type": "postback",
                  "label": "รถแดง",
                  "data": "action=add&itemid=123"
              }, {
                  "type": "uri",
                  "label": "รถตู้",
                  "uri": "http://example.com/page/123"
              }]
          }
      }
  } else if (eventText === 'ประวัติ') {
      msg = {
          "type": "template",
          "altText": "this is a confirm template",
          "template": {
              "type": "confirm",
              "text": "บันทึกเส้นทางการเดินทางหรือไม่",
              "actions": [{
                  "type": "message",
                  "label": "Yes",
                  "text": "yes"
              }, {
                  "type": "message",
                  "label": "No",
                  "text": "no"
              }]
          }
      }
  } else if (eventText === 'สายรถ') {
      msg = {
          "type": "template",
          "altText": "this is a carousel template",
          "template": {
              "type": "carousel",
              "columns": [
                  {
                      "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
                      "title": "รถเมล์",
                      "text": "เลือกสายรถที่ต้องการทราบได้เลย",
                      "actions": [
                          {
                              "type": "uri",
                              "label": "ปอ.21",
                              "uri": "http://www.bmta.co.th/th/lines"
                          },
                          {
                              "type": "postback",
                              "label": "ปอ.141",
                              "data": "action=add&itemid=111"
                          },
                          {
                              "type": "uri",
                              "label": "ปอ.142",
                              "uri": "http://www.bmta.co.th/th/lines"
                          }
                      ]
                  },
                  {
                      "thumbnailImageUrl": "https://www.prachachat.net/wp-content/uploads/2020/08/93874109_239013097296657_3538242789143740416_n-728x486.jpg",
                      "title": "รถแดง",
                      "text": "เลือกสายรถที่ต้องการทราบได้เลย",
                      "actions": [
                          {
                              "type": "postback",
                              "label": "รถแดง1",
                              "data": "action=buy&itemid=222"
                          },
                          {
                              "type": "postback",
                              "label": "รถแดง2",
                              "data": "action=add&itemid=222"
                          },
                          {
                              "type": "uri",
                              "label": "รถแดง3",
                              "uri": "http://example.com/page/222"
                          }
                      ]
                  }
              ]
          }
      }
  }

  return client.replyMessage(event.replyToken, msg);
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
