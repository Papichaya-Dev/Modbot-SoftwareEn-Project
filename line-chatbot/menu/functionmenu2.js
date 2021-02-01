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
            type: `text`,
            text: `สำหรับการเช็กจุดขึ้นรถ ทำให้คุณทราบถึงบริเวณจุดขึ้นรถที่อยู่ใกล้ตัวคุณมากที่สุด
เพื่อที่จะสามารถไปยังจุดหมายของคุณได้ค่ะ 📍🚍 `,
          },
          {
            "type": "text", // ①
            "text": "ส่งตำแหน่งปัจจุบันของคุณมาได้เลยค่า",
            "quickReply": { // ②
              "items": [
                {
                  "type": "action", // ④
                  "action": {
                    "type": "location",
                    "label": `กดที่นี่เพื่อส่งตำแหน่งปัจจุบัน`
                  }
                },
              ]
            }
          }
        ],
      }),
    });
  };
  