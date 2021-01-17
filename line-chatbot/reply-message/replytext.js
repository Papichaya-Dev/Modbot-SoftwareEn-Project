var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.hellomessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "สวัสดีค่า modbot ยินดีให้บริการค่ะ",
          },
          {
            "type": "sticker",
            "packageId": "11539",
            "stickerId": "52114146"
          }
        ],
      }),
    });
  };
  
exports.errormessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ขออภัยค่า modbot ยังไม่ทราบคำที่ท่านส่งมา เดี๋ยวทางเราจะอัปเดตให้น้า 🚀",
          },
          {
            "type": "sticker",
            "packageId": "11539",
            "stickerId": "52114126"
          }
        ],
      }),
    });
};