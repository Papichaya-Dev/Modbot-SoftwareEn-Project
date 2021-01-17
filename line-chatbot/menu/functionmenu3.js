var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu3 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "กรุณาเลือกประเภทรถโดยสารที่คุณต้องการทราบได้เลยค่ะ 📌",
          },
          {
            "type": "template",
            "altText": "this is an image carousel template",
            "template": {
              "type": "image_carousel",
              "columns": [
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/93566011_2871809409600862_8298071515329462272_n.jpg?_nc_cat=110&ccb=2&_nc_sid=b9115d&_nc_ohc=2tNeeh1pEowAX-NoNV7&_nc_ht=scontent.fbkk26-1.fna&oh=28298b34e0c91ebe38809ea359fe0c60&oe=60208906",
                  "action": {
                    "type": "message",
                    "label": ": รถเมล์ ",
                    "text": "ตารางเวลารถเมล์"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/63481053_10156054482342038_4804749123414654976_o.jpg?_nc_cat=100&ccb=2&_nc_sid=b9115d&_nc_ohc=9wWVrF7rSssAX-YtXxo&_nc_ht=scontent.fbkk26-1.fna&oh=ed1dbb31b4b1bb626351a7e7eb315562&oe=6022254F",
                  "action": {
                    "type": "message",
                    "label": ": รถตู้",
                    "text": "Action 2"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/81542668_2879253665472249_7609980658877726720_o.jpg?_nc_cat=107&ccb=2&_nc_sid=825194&_nc_ohc=GfM34WNOJKsAX9T7B9d&_nc_ht=scontent.fbkk26-1.fna&oh=db096c2e25300cf3e1c9039d5844c9b3&oe=60234E0F",
                  "action": {
                    "type": "message",
                    "label": ": รถแดง",
                    "text": "Action 3"
                  }
                }
              ]
            }
          }
        ],
      }),
    });
  };
  
  exports.timebus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "template",
          "altText": "this is a buttons template",
          "template": {
              "type": "buttons",
              // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
              "title": "สายรถโดยสาร",
              "text": "กรุณาเลือกประเภทรถโดยสาร",
              "actions": [{
                  "type": "postback",
                  "text" : "ปอ.21",
                  "label": "ปอ.21",
                  "data": "action=buy&itemid=123"
              }, {
                  "type": "postback",
                  "label": "ปอ.141",
                  "data": "action=add&itemid=123"
              }, {
                  "type": "uri",
                  "label": "ปอ.142",
                  "uri": "http://example.com/page/123"
              }]
          }
        },
        ],
      }),
    });
  };
  
  exports.resulttimebus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "image",
            "originalContentUrl": "https://www.cityupdate.in.th/chiangmai/wp-content/uploads/sites/2/2016/06/RTC-time-2020.jpg",
            "previewImageUrl": "https://www.cityupdate.in.th/chiangmai/wp-content/uploads/sites/2/2016/06/RTC-time-2020.jpg"
        }
        ],
      }),
    });
  };