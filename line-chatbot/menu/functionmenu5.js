var request = require("request");

// Your Channel access token
const config = require('../config')
const Question = require('../model/QuestionfromUser');
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
                    "label": "แจ้งปัญหา",
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

exports.chatwithmodbot = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "วันนี้อากาศเเจ่มใสดีนะคะ",
          },
          {
            type: `text`,
            text: "สนใจมาทำนายดวงรายวันจากตั๋วรถเมล์กันไหมคะ 🔮",
          },
          {
            "type": "template",
            "altText": "this is a confirm template",
            "template": {
                "type": "confirm",
                "text": "สนใจทำนายดวงกันม๊า",
                "actions": [
                    {
                      "type": "message",
                      "label": "สนใจ",
                      "text": "สนใจทำนายดวง"
                    },
                    {
                      "type": "message",
                      "label": "ไม่สนใจ",
                      "text": "ยังไม่สนใจ"
                    }
                ]
            }
          }
        ],
      }),
    });
  };
  
exports.fortunetelling= (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          // {
          //   type: `text`,
          //   text: "หยิบตั๋วของคุณขึ้นมา และเลื่อนไปที่ตัวเลขตัวสุดท้ายเเล้วดูคำทำนายได้เลย",
          // },
        //   {
        //     "type": "flex",
        //     "altText": "Flex Message",
        //     "contents": {
        //       "type": "carousel",
        //       "contents": [
        //         {
        //           "type": "bubble",
        //           "header": {
        //             "type": "box",
        //             "layout": "vertical",
        //             "flex": 0,
        //             "contents": [
        //               {
        //                 "type": "text",
        //                 "text": "🔮 จิ้มเลขตัวสุดท้ายได้เลย 🔮",
        //                 "contents": []
        //               }
        //             ]
        //           },
        //           "hero": {
        //             "type": "image",
        //             "url": "https://www.gangbeauty.com/uppic/2017-12/15/7c490a6bc.webp",
        //             "size": "full",
        //             "aspectRatio": "20:13",
        //             "aspectMode": "cover"
        //           },
        //           "footer": {
        //             "type": "box",
        //             "layout": "vertical",
        //             "spacing": "sm",
        //             "contents": [
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "0",
        //                   "text": "เลข0"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "1",
        //                   "text": "เลข1"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "2",
        //                   "text": "เลข2"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "3",
        //                   "text": "เลข3"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "4",
        //                   "text": "เลข4"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "5",
        //                   "text": "เลข5"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               }
        //             ]
        //           }
        //         },
        //         {
        //           "type": "bubble",
        //           "header": {
        //             "type": "box",
        //             "layout": "vertical",
        //             "flex": 0,
        //             "contents": [
        //               {
        //                 "type": "text",
        //                 "text": "🔮 จิ้มเลขตัวสุดท้ายได้เลย 🔮",
        //                 "contents": []
        //               }
        //             ]
        //           },
        //           "hero": {
        //             "type": "image",
        //             "url": "https://lekdedonline.com/app/uploads/2020/09/rfmgi3.jpg",
        //             "size": "full",
        //             "aspectRatio": "20:13",
        //             "aspectMode": "cover"
        //           },
        //           "footer": {
        //             "type": "box",
        //             "layout": "vertical",
        //             "spacing": "sm",
        //             "contents": [
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "6",
        //                   "text": "เลข6"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "7",
        //                   "text": "เลข7"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "8",
        //                   "text": "เลข8"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "9",
        //                   "text": "เลข9"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               },
        //               {
        //                 "type": "button",
        //                 "action": {
        //                   "type": "message",
        //                   "label": "10",
        //                   "text": "เลข10"
        //                 },
        //                 "color": "#526F7CFF",
        //                 "style": "primary"
        //               }
        //             ]
        //           }
        //         }
        //       ]
        //     }
        // },
        {
          "type": "text", // ①
          "text": "หยิบตั๋วของคุณขึ้นมา และเลื่อนไปที่ตัวเลขตัวสุดท้ายเเล้วดูคำทำนายได้เลย",
          "quickReply": { // ②
            "items": [
              {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข0",
                  "text": "เลข0"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข1",
                  "text": "เลข1"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข2",
                  "text": "เลข2"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข3",
                  "text": "เลข3"
                }
              },
              {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข4",
                  "text": "เลข4"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข5",
                  "text": "เลข5"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข6",
                  "text": "เลข6"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข7",
                  "text": "เลข7"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข8",
                  "text": "เลข8"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข9",
                  "text": "เลข9"
                }
              },   {
                "type": "action",
                "action": {
                  "type": "message",
                  "label": "เลข10",
                  "text": "เลข10"
                }
              }
            ]
          }
        }
        ],
      }),
    });
};

exports.questionuser = (bodyResponse) => {
  Question.findOne({userId : bodyResponse.events[0].source.userId})
    .then((res) => {
      if(res) {
        Question.updateOne({userId : bodyResponse.events[0].source.userId},{$set:{nowQuestion : true}},function (err,res) {
          if(res) {
              console.log(res)
              console.log("success")
          } else {
              console.log(err)
              console.log("error")
          }
      })
      } else {
        Question.insertMany ({
          userId : bodyResponse.events[0].source.userId,
          nowQuestion : true 
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
          text: "ต้องการเสนอเเนะเรื่องอะไร หรืออยากให้มดบอทเพิ่มสถานที่ไหนให้ครอบคลุม พิมพ์มาได้เลยนะคะ",
        },
        {
          type: `text`,
          text: "เดี๋ยวมดบอทจะทำการอัปเดตให้ค่า 🌻💌",
        }
      ],
    }),
  });
};

exports.thankyouQuestion = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ขอบคุณสำหรับคำเเนะนำนะคะ เดี๋ยวทางมดบอทจะตรวจสอบและทำการอัปเดตให้น้า (´∀｀)♡💖 ",
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
