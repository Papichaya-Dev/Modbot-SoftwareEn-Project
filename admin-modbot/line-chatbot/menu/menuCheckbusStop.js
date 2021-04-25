var request = require("request");

// Your Channel access token
const config = require('../config')
const CheckBusStop = require('../model/CheckBusStop');
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.sendCurrentPoint = (bodyResponse) => {
  CheckBusStop.findOne({userId : bodyResponse.events[0].source.userId})
  .then((res) => {
      if (res){
        CheckBusStop.update({userId : bodyResponse.events[0].source.userId},{$set:{isCheckBusStop : true}},function (err,res) { 
          if(res) {
          console.log(res)
          console.log("success")
          } else {
          console.log(err)
          console.log("error")
          }
      })
      } else {
          console.log('User click menu CheckbusStop')
            CheckBusStop.insertMany ({
                  userId : bodyResponse.events[0].source.userId,
                  isCheckBusStop : true
              })
      }
  })
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
  
exports.sendDestinationPoint = (bodyResponse) => {
  console.log('send des')
  console.log(bodyResponse)
      return request({
        method: `POST`,
        uri: `${LINE_MESSAGING_API}/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
          replyToken: bodyResponse.events[0].replyToken,
          messages: [
            {
              "type": "text", // ①
              "text": "และสุดท้าย ส่งตำแหน่งปลายทางที่ต้องการจะไปได้เลยค่ะ ᵔᴥᵔ",
              "quickReply": { // ②
                "items": [
                  {
                    "type": "action", // ④
                    "action": {
                      "type": "location",
                      "label": `กดที่นี่เพื่อส่งจุดหมาย`
                    }
                  },
                ]
              }
            }
          ],
        }),
      });
 };

exports.replyForResultSoFar = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: `ขอโทษด้วยนะคะ ขณะนี้ระบบยังไม่รองรับพื้นที่ที่คุณกำลังจะไปค่ะ`
        },
        {
          type: `text`,
          text: `เดี๋ยวทางเราจะทำการอัปเดตให้ในภายหลังนะคะ`,
        },
        {
          "type": "sticker",
          "packageId": "11539",
          "stickerId": "52114110 5"
        }
      ],
    }),
  });
};