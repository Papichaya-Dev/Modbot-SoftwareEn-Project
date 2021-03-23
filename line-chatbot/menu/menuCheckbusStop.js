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
          console.log('lookpad')
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

exports.prepareCheckbusStop = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: `และจะเข้าสู่ฟังก์ชั่นเช็กจุดขึ้นรถ ต่อมาจะเเสดงบริเวณจุดขึ้นรถที่ใกล้ที่สุดเพื่อไปยังจุดหมาย`
        },
        {
          type: `text`,
          text: `ซึ่งกำลังอยู่ในขั้นตอนศึกษาพัฒนาค่ะ 
╰( ͡° ͜ʖ ͡° )つ─☆`,
        },
        {
          "type": "sticker",
          "packageId": "2",
          "stickerId": "161"
        }
      ],
    }),
  });
};

exports.moreDetail = (bodyResponse, resData) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: `รายละเอียดสำหรับจุดขึ้นรถบริเวณ ${resData[0].bus_stop_name}`
        },
      ],
    }),
  });
};