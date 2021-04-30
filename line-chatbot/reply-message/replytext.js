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
  let errormessage = ["ขออภัยด้วยนะคะ 🙇🏻‍♀️  มดบอทกำลังเรียนรู้คำที่คุณส่งมาอยู่ (つ ͡° ͜ʖ ͡°)つ",
"มดบอทไม่เข้าใจที่คุณพิมพ์มาค่ะ 🥺", "คุณหมายถึงอะไรนะคะ", "ลองคลิ๊กดูเมนูด้านล่างก่อนน้า 👇 เผื่อมดบอทช่วยคุณได้","มดบอทไม่เข้าใจคำถาม ขออภัยด้วยค่ะ 🙇🏻‍♀️"]
  let randomNumber = Math.floor((Math.random() * errormessage.length))

    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: `${errormessage[randomNumber]}`,
          },
        ],
      }),
    });
};

exports.replyforOverFar = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ขออภัยด้วยนะคะ 🙇🏻‍♀️ ระบบยังไม่รองรับพื้นที่ที่คุณกำลังจะไปค่ะ ขณะนี้มดบอทรองรับเส้นทางที่อยู่ในบริเวณพระราม 2 ค่า",
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581274"
        }
      ],
    }),
  });
};