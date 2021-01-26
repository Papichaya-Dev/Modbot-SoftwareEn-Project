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
                  "imageUrl": "https://polytential.nl/wp-content/uploads/2019/04/3d9a32a59e.png",
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
            text: "ขอให้วันนี้การเดินทางเป็นไปได้ด้วยดีนะคะ และสดใสในทุกๆวันเลยน้า ʚ♡⃛ɞ(ू•ᴗ•ू❁)💘"
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
          "packageId": "3",
          "stickerId": "181"
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
          "packageId": "2",
          "stickerId": "502"
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
          "packageId": "3",
          "stickerId": "195"
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
          "packageId": "4",
          "stickerId": "607"
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
          "packageId": "2",
          "stickerId": "164"
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
          "packageId": "1",
          "stickerId": "125"
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
          "packageId": "1",
          "stickerId": "5"
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
          "packageId": "4",
          "stickerId": "292"
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
          "packageId": "3",
          "stickerId": "191"
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
          "packageId": "2",
          "stickerId": "172"
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
          text: "ต้องการเสนอเเนะเรื่องอะไร หรืออยากให้มดบอทเพิ่มสถานที่ไหนให้ครอบคลุม พิมพ์มาได้เลยนะคะ 🌻💌",
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
