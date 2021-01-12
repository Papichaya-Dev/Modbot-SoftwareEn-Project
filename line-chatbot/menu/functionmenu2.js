var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu2 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "text", // ①
            "text": "ลองจิ้มส่ง location ของเธอมาสิ ✨",
            "quickReply": { // ②
              "items": [
                {
                  "type": "action", // ④
                  "action": {
                    "type": "location",
                    "label": "Send location"
                  }
                },
                {
                  "type": "action",
                  "imageUrl": "https://image.freepik.com/free-vector/finger-point-hand-show-vector-thumb-direction-showing_79145-25.jpg",
                  "action": {
                    "type": "message",
                    "label": "custom point",
                    "text": "เลือกจุดเอง"
                  }
                },
              ]
            }
          }
        ],
      }),
    });
  };
  
exports.custompoint = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "template",
            "altText": "this is a image carousel template",
            "template": {
                "type": "image_carousel",
                "columns": [
                    {
                      "imageUrl": "https://s3.ap-southeast-1.amazonaws.com/asset.punpro.com/contents/i9850/1596612528354-o287233138665194f48f8be8dc10dbf4c_4620693218568236411_200805_14.jpg",
                      "action": {
                        "type": "postback",
                        "label": "see detail",
                        "data": "action=buy&itemid=111"
                      }
                    },
                    {
                      "imageUrl": "https://thalays.com/wp-content/uploads/2019/10/20191004-van.jpg",
                      "action": {
                        "type": "message",
                        "label": "see detail",
                        "text": "yes"
                      }
                    },
                    {
                      "imageUrl": "https://img.tnews.co.th/userfiles/images/e51818be88c4c051a420b397b3bcff4c.jpg",
                      "action": {
                        "type": "uri",
                        "label": "see detail",
                        "uri": "http://example.com/page/222"
                      }
                    }
                ]
            }
          }
        ],
      }),
    });
};