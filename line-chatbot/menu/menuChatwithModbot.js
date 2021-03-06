var request = require("request");

// Your Channel access token
const config = require('../config')
const Question = require('../model/QuestionfromUser');
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.menuChatwithModbot = (bodyResponse) => {
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
                  "imageUrl": "https://cdn0.iconfinder.com/data/icons/recommendations/128/Recommendation_IconsLayer_9-512.png",
                  "action": {
                    "type": "message",
                    "label": "อยากเสนอเเนะ",
                    "text": "อยากเสนอเเนะ"
                  }
                },
                {
                  "type": "action",
                  "imageUrl": "https://cdn3.iconfinder.com/data/icons/cosmo-color-symbols/40/attention_3-512.png",
                  "action": {
                    "type": "message",
                    "label": "แจ้งปัญหา",
                    "text": "แจ้งปัญหาการใช้งาน"
                  }
                },
                {
                  "type": "action",
                  "imageUrl": "https://image.flaticon.com/icons/png/512/2657/2657420.png",
                  "action": {
                    "type": "message",
                    "label": "ดูดวงกับมดบอท",
                    "text": "ดูดวงกับมดบอท"
                  }
                },
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
                "text": "สนใจทำนายดวงกันไหมคะ",
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

exports.nointerest = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ไว้วันหลังอย่าลืมมาลองทำนายดูน้า",
          },
          
          {
            type: `text`,
            text: "ขอให้วันนี้การเดินทางเป็นไปได้ด้วยดีนะคะ ʚ♡⃛ɞ(ू•ᴗ•ू❁)💘"
          },
          {
            "type": "sticker",
            "packageId": "11537",
            "stickerId": "52002747"
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
        {
          "type": "text", // ①
          "text": "หยิบตั๋วของคุณขึ้นมา และเลื่อนไปที่ตัวเลขตัวสุดท้ายเเล้วดูคำทำนายได้เลย ʚ♡⃛ɞ(ू•ᴗ•ू❁)",
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
              }
            ]
          }
        }
        ],
      }),
    });
};

exports.numberzero = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 0 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้ถ้าคุณกำลังออกไปทำธุระเรื่องงานมีสิทธิจะได้เจอประสบการณ์ในการทำงานใหม่ๆที่ไม่มีการบอกล่วงหน้าและในวันนี้มีสิทธิจะได้มีข่าวการเดินทางไกลเข้ามาด้วยก็เป็นได้",
        },
        {
          type: `text`,
          text: "ส่วนเรื่องรักวันนี้มีโอกาสเล็กๆที่จะได้พบรักกับคนที่คุณไม่เคยพบเจอกันมาก่อน แต่การเงินวันนี้อาจมีเรื่องให้เสียเงินเยอะเป็นพิเศษเพราะเรื่องไม่เป็นเรื่อง ╰( ͡° ͜ʖ ͡° )つ 💕"
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581276",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numberone = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 1 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้คุณจะได้เจอเรื่องให้ท้าทายความสามารถของคุณ วันนี้คุณอาจต้องดึงความสามารถหลายๆอย่างออกมาใช้อย่างเต็มที่",
        },
        {
          type: `text`,
          text: "และเตรียมพร้อมไว้เพราะวันนี้เหตุการณ์ไม่คาดคิดอาจจะเข้ามาโดยกะทันหัน รวมถึงเรื่องของความรักก็อาจมีการเปลี่ยนแปลงที่คาดไม่ถึงเกิดขึ้นได้ ( ͡ຈ ͜ʖ ͡ຈ) 💘"
        },
        {
          "type": "sticker",
          "packageId": "6370",
          "stickerId": "11088029",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numbertwo = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 2 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้จะมีคนรอบตัวหลายๆคนทั้งที่สนิทสนมกันดีและคนที่ไม่ค่อยรู้จักกันจะเริ่มให้ความสนใจในตัวคุณ ไม่ว่าคุณจะพูดหรือทำอะไรก็ตามในวันนี้จะมีคนให้ความสนใจกับการกระทำของคุณในวันนี้เยอะเป็นพิเศษ",
        },
        {
          type: `text`,
          text: "วันนี้จะเหมาะกับการทำงานที่ต้องใช้คำพูดและคารมในการดึงดูดความสนใจของคนอื่นๆ แต่ควรระวังเรื่องเงินในวันนี้จะมีเหตุให้เสียเงินบานปลายได้ง่าย (つ ͡° ͜ʖ ͡°)つ 💌🤍"
        },
        {
          "type": "sticker",
          "packageId": "1070",
          "stickerId": "17844",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numberthree = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 3 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้เป็นวันที่มีดวงนารีอุปถัมภ์มากเป็นพิเศษโดยเฉพาะกับผู้หญิงที่สูงวัยอยู่ รวมถึงในวันนี้มีสิทธิจะได้โชคลาภเพราะผู้หญิงที่มีอายุด้วยก็ได้",
        },
        {
          type: `text`,
          text: "แต่ควรระวังเพราะวันนี้จะมีเรื่องมาดึงดูดใจให้คุณเสียเงินกับสิ่งของต่างๆที่จะเข้ามาล่อตาล่อใจคุณ ୧༼ ͡◉ل͜ ͡◉༽୨ 💝"
        },
        {
          "type": "sticker",
          "packageId": "6632",
          "stickerId": "11825385",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numberfour = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 4 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้จะเป็นวันที่ผู้ใหญ่และผู้ที่มีอำนาจสูงกว่าครูโดยเฉพาะผู้ชายจะให้การสนับสนุนแก่คุณมากเป็นพิเศษ และผู้ใหญ่ที่คุณต้องไปเจอในวันนี้อาจมีข้อเสนอที่ดีและคาดไม่ถึงมามอบให้แก่คุณ",
        },
        {
          type: `text`,
          text: "แต่ในขณะเดียววันนี้คุณอาจต้องเจอกับปัญหาบางอย่างที่เข้ามาอย่างกะทันหันด้วยเช่นกัน ୧༼✿ ͡◕ д ◕͡ ༽୨ ❣️"
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581282",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numberfive = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 5 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้จะมีโอกาสที่คุณจะได้รับการชักชวนให้ไปร่วมงานบุญหรืองานการกุศลบางอย่าง นับว่าเป็นโอกาสดีที่จะได้ทำบุญสำหรับคนที่อาจห่างหายจากเรื่องนี้มานาน",
        },
        {
          type: `text`,
          text: "และในวันนี้มีสิทธิจะได้รับคำแนะนำดีๆบางอย่างจากคนที่มีประสบการณ์และน่าเคารพนับถือ (✿´ ꒳ ` ) 💞"
        },
        {
          "type": "sticker",
          "packageId": "789",
          "stickerId": "10872",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numbersix = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 6 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้เป็นวันที่จะเด่นเรื่องความรักและเสน่ห์ในตัวคุณจะโดดเด่นออกมามากเป็นพิเศษ วันนี้ถึงคุณจะไม่ได้ตั้งใจจะจริงจังเรื่องรักแต่อาจมีสิทธิที่คนใกล้ตัวคุณบางคนอาจเป็นฝ่ายเข้ามาส่งสัญญาณแสดงความสนใจในตัวคุณ",
        },
        {
          type: `text`,
          text: "และวันนี้เหมาะมากสำหรับใครที่คิดจะสารภาพรักหรือบอกความในใจให้คนที่เรารักรับรู้ (´,,•ω•,,)♡ 💌"
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581275",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numberseven = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 7 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: " ถ้าวันนี้คุณต้องออกไปทำงานต้องเตรียมตัวเองไว้ให้พร้อม เพราะการทำงานในวันนี้อาจต้องเจอกับปัญหาที่เพิ่มมากขึ้น",
        },
        {
          type: `text`,
          text: "รวมถึงอาจมีงานที่มอบหมายเข้ามาแทบจะไม่หยุดหย่อนตลอดทั้งวัน รวมถึงในวันนี้มีสิทธิที่คุณจะต้องมีการเดินทางโดยกะทันหันเกิดขึ้นในวันนี้ (｀･ω･´)+ 💌"
        },
        {
          "type": "sticker",
          "packageId": "6359",
          "stickerId": "11069858",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numbereight = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 8 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้ถ้าคุณเป็นสุภาพสตรีถือว่าเป็นวันของคุณแล้ว ปัญหาต่างๆที่คุณเผชิญมาจะเริ่มคลี่คลายในวันนี้รวมถึงโอกาสต่างๆที่คุณรอคอยและอดทนรอมาจะมีวี่แววที่ดีเข้ามาแล้ว",
        },
        {
          type: `text`,
          text: "แต่สำหรับคุณผู้ชายในวันนี้คุณยังต้องเจอกับปัญหาจุกจิกน่าเบื่อมาเป็นระยะ แต่ถ้าวันนี้คุณผู้ชายต้องการหาตัวช่วยแก้ปัญหาต่างๆลองไปหาที่พึ่งที่เป็นผู้หญิงด้วยจะช่วยเหลือคุณได้ดีที่สุด (´∀｀)♡ 💖"
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581277",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.numbernine = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตัวที่ลงท้ายด้วยเลข 9 ทำนายว่า ...",
        },
        {
          type: `text`,
          text: "วันนี้อาจเป็นวันที่ค่อนข้างน่าเบื่อ ยิ่งถ้าวันนี้คุณออกไปทำงานวันนี้สถานการณ์รอบตัวจะไม่มีการเปลี่ยนแปลงมากเท่าไหร่ไม่ต่างจากวันก่อนๆที่ผ่านมา",
        },
        {
          type: `text`,
          text: "วันนี้ไม่เหมาะนักที่จะเริ่มต้นทำอะไรใหม่ๆหรือเริ่มแผนการใหม่ๆ อดทนและใจเย็นไปก่อนดีกว่า ไม่ว่าจะเป็นเรื่องงาน เรื่องเงินและเรื่องความรัก ♪(｡◕ฺˇε ˇ◕ฺ｡）♡ 🤍"
        },
        {
          "type": "sticker",
          "packageId": "8522",
          "stickerId": "16581270",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมเลขท้าย",
                  "text": "กลับไปยังหน้ารวมเลขท้าย"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.confirmquestion = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ต้องการเสนอเเนะเรื่องอะไร หรืออยากให้มดบอทเพิ่มสถานที่ไหนให้ครอบคลุม",
        },
        {
          type: `text`,
          text: "กดปุ่มยืนยันเมื่อต้องการส่งได้เลยน้า 🌻💌",
        },
        {
          "type": "template",
          "altText": "this is a confirm template",
          "template": {
              "type": "confirm",
              "text": "ต้องการส่งข้อเสนอแนะหรือไม่",
              "actions": [
                  {
                    "type": "message",
                    "label": "ต้องการ",
                    "text": "ต้องการส่งข้อเสนอเเนะ"
                  },
                  {
                    "type": "message",
                    "label": "ไม่ต้องการ",
                    "text": "ไม่ต้องการส่งข้อเสนอ"
                  }
              ]
          }
        }
      ],
    }),
  });
};

exports.noconfirmquestion = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "โอเคค่า ถ้าต้องการส่งเมื่อไหร่กดเลือกที่เมนูคุยกับมดบอทและกดส่งข้อเสนอแนะได้เลยน้า (❁ᴗ͈ˬᴗ͈)",
        },
      ],
    }),
  });
};

exports.questionuser = (bodyResponse) => {
  Question.findOne({userId : bodyResponse.events[0].source.userId})
    .then((res) => {
      if(res) {
        Question.updateOne({userId : bodyResponse.events[0].source.userId},{$set:{currentQuestion : true}},function (err,res) {
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
          currentQuestion : true 
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
          text: "พิมพ์มาได้เลยค่า ^^",
        },
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
          text: "ขอบคุณสำหรับคำเเนะนำนะคะ",
        },
        {
          type: `text`,
          text: "เดี๋ยวทางมดบอทจะตรวจสอบและทำการอัปเดตให้น้า (´∀｀)♡💖 ",
        },
        {
          "type": "sticker",
          "packageId": "11539",
          "stickerId": "52114122"
        }
      ],
    }),
  });
};

exports.confirmproblem = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ต้องการแจ้งปัญหาเกี่ยวกับการใช้งานของมดบอทใช่หรือไม่ 🌞📃",
        },
        {
          type: `text`,
          text: "ถ้าใช่กดปุ่มยืนยันเมื่อต้องการส่งได้เลยน้า",
        },
        {
          "type": "template",
          "altText": "this is a confirm template",
          "template": {
              "type": "confirm",
              "text": "ต้องการแจ้งปัญหาหรือไม่",
              "actions": [
                  {
                    "type": "message",
                    "label": "ต้องการ",
                    "text": "ต้องการแจ้งปัญหาการใช้งาน"
                  },
                  {
                    "type": "message",
                    "label": "ไม่ต้องการ",
                    "text": "ไม่ต้องการแจ้งปัญหา"
                  }
              ]
          }
        }
      ],
    }),
  });
}; 

exports.noconfirmproblem = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "โอเคค่า ถ้าต้องการส่งเมื่อไหรกดเลือกที่เมนูคุยกับมดบอทและกดแจ้งปัญหาได้เลยน้า (❁ᴗ͈ˬᴗ͈)",
        },
      ],
    }),
  });
};

exports.problemfromuser = (bodyResponse) => {
  Question.findOne({userId : bodyResponse.events[0].source.userId})
    .then((res) => {
      if(res) {
        Question.updateOne({userId : bodyResponse.events[0].source.userId},{$set:{currentProblem : true}},function (err,res) {
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
          currentProblem: true 
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
          text: "หากมีปัญหาการใช้งานตรงไหน พิมพ์บอกมาได้เลยน้า (‘∀’♡)",
        },
      ],
    }),
  });
};

exports.thankyouproblem = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ขอโทษสำหรับปัญหาที่เจอและขอบคุณสำหรับคำตอบนะคะ 🙇‍♀️",
        },
        {
          type: `text`,
          text: "มดบอทยินดีนำไปปรับปรุงให้ดียิ่งขึ้นเลยค่ะ ✧٩(•́⌄•́๑) 🔧 ",
        },
        {
          "type": "sticker",
          "packageId": "11539",
          "stickerId": "52114110"
        }
      ],
    }),
  });
};