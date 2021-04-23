var request = require("request");

// Your Channel access token
// create LINE SDK config from env variables
const config = {
  channelAccessToken: "8/nQcDP87i59lfeImmXTfxyQSF28MN9odZKOLFMK1LTaPydVXADb38+PYPOuxvufEQ62N89drGbso0aqwh2n4bjp1LMSmxqCKwzZa0jlYTmxn+QdKjHoYfzXGGGtalEQ77M3RrBCsRIqWRxO1CWzjgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "86cab6614d4eccefeb0503cbf936c45c",
};
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
            text: "ขออภัยด้วยนะคะ 🙇🏻‍♀️  มดบอทกำลังเรียนรู้คำที่คุณส่งมาอยู่ เดี๋ยวทางเราจะอัปเดตให้น้า (つ ͡° ͜ʖ ͡°)つ",
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