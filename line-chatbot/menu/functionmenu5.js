var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu5 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "text", // ①
            "text": "มดบอทสวัสดีค่า ต้องการพูดคุยเกี่ยวกับเรื่องอะไรดีคะ 💁🏻‍♀",
            "quickReply": { // ②
              "items": [
                {
                  "type": "action",
                  "imageUrl": "https://aux.iconspalace.com/uploads/chat-icon-256-1480184508.png",
                  "action": {
                    "type": "message",
                    "label": "พูดคุยทั่วไป",
                    "text": "พูดคุยทั่วไป"
                  }
                },
                {
                  "type": "action",
                  "imageUrl": "https://cdn0.iconfinder.com/data/icons/recommendations/128/Recommendation_IconsLayer_9-512.png",
                  "action": {
                    "type": "message",
                    "label": "อยากเสนอเเนะ",
                    "text": "อยากเสนอเเนะ"
                  }
                },
                {
                  "type": "action",
                  "imageUrl": "https://lh3.googleusercontent.com/proxy/xAZDIcs-WU8lXvhStn8JIqlExv1uYIDLIk8Ck_9WRe1qxSw7yFF2zwL9SZOrCt0e88l2fijbHyhCrQuaHjVXLjj9gCbXtIhUx9aOg0DTPGk_bSGldGHYDxXg0OxMLGyvOyFXpw60IJhpanU8055cczS2VpTRKr3s",
                  "action": {
                    "type": "message",
                    "label": "แจ้งปัญหาการใช้งาน",
                    "text": "แจ้งปัญหาการใช้งาน"
                  }
                }
              ]
            }
          }
        ],
      }),
    });
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