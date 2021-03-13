var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.menuPriceTable = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
              "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
                "title": "อัตราค่าโดยสาร",
                "text": "กรุณาเลือกประเภทรถโดยสาร",
                "actions": [{
                    "type": "postback",
                    "text" : "ราคารถเมล์",
                    "label": "รถเมล์",
                    "data": "action=buy&itemid=123"
                }, {
                    "type": "postback",
                    "text" : "ราคารถแดง",
                    "label": "รถแดง",
                    "data": "action=add&itemid=123"
                },{
                  "type": "postback",
                  "text" : "ราคารถตู้",
                  "label": "รถตู้",
                  "data": "action=add&itemid=123"
                },]
            }
          },
        ],
      }),
    });
  };

  exports.vancost = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            // "text": `${result}`,
            "text": `ตารางราคาค่าโดยสารของรถตู้ค่า✨`,
          },
          {
            "type": `text`,
            "text": `ดูตามเลขสายได้เลยน้า `,
          },
          {
            "type": "image",
            "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817694153537224715/210306_3.jpg",
            "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817694153537224715/210306_3.jpg"
          },
          {
            "type": "image",
            "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817694178430943252/210128_1.jpg",
            "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647905917108234/Time_210306_0.jpg"
          }
        ],
      }),
    });
  };

exports.costminibus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            "text": `อัตราค่าโดยสาร รถแดง 🚗📍`,
          },
          {
            "type": `text`,
            "text": `ต้นทาง - ปลายทาง : กม.9-ประชาอุทิศ 90
: 7 บาทตลอดสาย
❗️ หลังสามทุ่ม 10 บาท ❗️`,
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

exports.selectnumbus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            "text": `กรุณาเลือกราคาสายรถเมล์ที่คุณอยากทราบด้านล่างได้เลยค่า 💸👇`,
          },
          {
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
              "type": "carousel",
              "contents": [
                {
                  "type": "bubble",
                  "header": {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 0,
                    "contents": [
                      {
                        "type": "text",
                        "text": "🌻 สายรถเมล์ที่ราคาเเตกต่างกัน 🌻",
                        "contents": []
                      }
                    ]
                  },
                  "hero": {
                    "type": "image",
                    "url": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/p960x960/107008952_599658580968882_2976526492062762330_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_eui2=AeGZrnkj2FADs5qmquJpML9duL4PsUoTZm-4vg-xShNmb4XcXtD2NYP_Xd4k9bZqxPXBfZmln-7-LWwdykdrquYQ&_nc_ohc=KOL12u54ef8AX8MqqTx&_nc_ht=scontent.fbkk12-3.fna&tp=6&oh=124248d5e0ed4cc15d29a6a22d5d1c0c&oe=60718FFF",
                    "size": "5xl",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover"
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.21",
                          "text": "ราคารถเมล์ปอ.21"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.75",
                          "text": "ราคารถเมล์ปอ.75"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.140",
                          "text": "ราคารถเมล์ปอ.140"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.141",
                          "text": "ราคารถเมล์ปอ.141"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.76",
                          "text": "ราคารถเมล์ปอ.76"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.105",
                          "text": "ราคารถเมล์ปอ.105"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.558",
                          "text": "ราคารถเมล์ปอ.558"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ปอ.147",
                          "text": "ราคารถเมล์ปอ.147"
                        },
                        "color": "#2E3F47FF",
                        "style": "primary"
                      }
                    ]
                  }
                }
              ]
            }          },
        {
          "type": "flex",
          "altText": "Flex Message",
          "contents": {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "flex": 0,
              "contents": [
                {
                  "type": "text",
                  "text": "🌼 สายรถเมล์ที่ราคาเดียวตลอดสาย 🌼",
                  "contents": []
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "ปอ.68",
                    "text": "ราคารถเมล์ปอ.68"
                  },
                  "color": "#526F7CFF",
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "ปอ.101",
                    "text": "ราคารถเมล์ปอ.101"
                  },
                  "color": "#526F7CFF",
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "ปอ.720",
                    "text": "ราคารถเมล์ปอ.720"
                  },
                  "color": "#526F7CFF",
                  "style": "primary"
                }
              ]
            }
          }
      },
    
        ],
      }),
    });
  };

exports.cost140 = (bodyResponse) => {
    let result;
    result = 5 * 10;
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            // "text": `${result}`,
            "text": `ตารางค่าโดยสาร รถเมล์สายปอ.140 ค่า✨`,
          },
          {
            "type": `text`,
            "text": `1. สายปอ.140 สีส้ม 🧡 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=9lvh_gcbwQ4AX9OtVVU&_nc_ht=scontent.fbkk26-1.fna&oh=33b4f28b02097572ded5cdbe734474c2&oe=604CB119",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=9lvh_gcbwQ4AX9OtVVU&_nc_ht=scontent.fbkk26-1.fna&oh=33b4f28b02097572ded5cdbe734474c2&oe=604CB119"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.140 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=3uMEP7g3020AX_0XQKN&_nc_ht=scontent.fbkk26-1.fna&oh=739ba5512fc5c08d0a7f862c0ee0bf21&oe=604CE0F4",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=3uMEP7g3020AX_0XQKN&_nc_ht=scontent.fbkk26-1.fna&oh=739ba5512fc5c08d0a7f862c0ee0bf21&oe=604CE0F4"
          }
        ],
      }),
    });
  };

exports.cost141 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            // "text": `${result}`,
            "text": `ตารางค่าโดยสาร รถเมล์สายปอ.141 ค่า✨`,
          },
          {
            "type": `text`,
            "text": `1. สายปอ.141 สีส้ม 🧡 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=6xaT2mu8nRwAX9-9HRj&_nc_ht=scontent.fbkk26-1.fna&oh=289af7b51fc7d5a8d9275b9df7daeb91&oe=604BA1CB",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_ohc=6xaT2mu8nRwAX9-9HRj&_nc_ht=scontent.fbkk26-1.fna&oh=289af7b51fc7d5a8d9275b9df7daeb91&oe=604BA1CB"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.141 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=5giRZYNGJk8AX8TvBen&_nc_ht=scontent.fbkk26-1.fna&oh=5b5ec6c452f4cc73864de29e11fd6596&oe=604CF80B",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=5giRZYNGJk8AX8TvBen&_nc_ht=scontent.fbkk26-1.fna&oh=5b5ec6c452f4cc73864de29e11fd6596&oe=604CF80B"
          }
        ],
      }),
    });
};


exports.cost76 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          // "text": `${result}`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.76 ค่า✨`,
        },
        {
          "type": `text`,
          "text": `1. สายปอ.76 สีส้ม 🧡 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136789650_136755688171454_532772991029427241_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=Z5J6KlCgiDAAX9jiSNS&_nc_ht=scontent.fbkk26-1.fna&oh=d46158139c779b9ae86477f9d3ce0657&oe=604A7E3A",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136789650_136755688171454_532772991029427241_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=Z5J6KlCgiDAAX9jiSNS&_nc_ht=scontent.fbkk26-1.fna&oh=d46158139c779b9ae86477f9d3ce0657&oe=604A7E3A"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.76 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136489737_721293172158440_6529429187232138741_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=pTExYky3J0UAX_7TTWU&_nc_ht=scontent.fbkk26-1.fna&oh=bcb8c96a54aac30862a54ab50c0f4b13&oe=604B1C56",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136489737_721293172158440_6529429187232138741_n.jpg?_nc_cat=100&ccb=3&_nc_sid=ae9488&_nc_ohc=pTExYky3J0UAX_7TTWU&_nc_ht=scontent.fbkk26-1.fna&oh=bcb8c96a54aac30862a54ab50c0f4b13&oe=604B1C56"
        }
      ],
    }),
  });
};

exports.cost105 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          // "text": `${result}`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.105 ค่า✨`,
        },
        {
          "type": `text`,
          "text": `1. สายปอ.105 สีส้ม 🧡 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137196266_3911695415560464_2686320589103231428_n.jpg?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nYo_zSaqdrUAX9nbR76&_nc_ht=scontent.fbkk26-1.fna&oh=324919f0c68798aed80e0d8e228c5d16&oe=604BBB78",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137196266_3911695415560464_2686320589103231428_n.jpg?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=nYo_zSaqdrUAX9nbR76&_nc_ht=scontent.fbkk26-1.fna&oh=324919f0c68798aed80e0d8e228c5d16&oe=604BBB78"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.105 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136380547_406136450472212_9067012664201701383_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=4KcvcQt3GtwAX8OUbch&_nc_ht=scontent.fbkk26-1.fna&oh=4d04fac390c8967033873b07a78e010b&oe=604BD9F5",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136380547_406136450472212_9067012664201701383_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=4KcvcQt3GtwAX8OUbch&_nc_ht=scontent.fbkk26-1.fna&oh=4d04fac390c8967033873b07a78e010b&oe=604BD9F5"
        }
      ],
    }),
  });
};

exports.cost558 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          // "text": `${result}`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.558 ค่า✨`,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137682664_724074504974877_5219544373394094740_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=_iKiwR9C-IoAX8oomox&_nc_ht=scontent.fbkk26-1.fna&oh=5fc57b824f52c5c9bce9051cf41660d2&oe=604D90A9",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137682664_724074504974877_5219544373394094740_n.jpg?_nc_cat=105&ccb=3&_nc_sid=ae9488&_nc_ohc=_iKiwR9C-IoAX8oomox&_nc_ht=scontent.fbkk26-1.fna&oh=5fc57b824f52c5c9bce9051cf41660d2&oe=604D90A9"
        }
      ],
    }),
  });
};

exports.cost147 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          // "text": `${result}`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.147 ค่า✨`,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138800628_152653566453620_4220596220363716484_n.jpg?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=JXXDLlar5oEAX-GKASW&_nc_ht=scontent.fbkk26-1.fna&oh=7c67211ba137068e7be3d7091948b6aa&oe=604A8214",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138800628_152653566453620_4220596220363716484_n.jpg?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=JXXDLlar5oEAX-GKASW&_nc_ht=scontent.fbkk26-1.fna&oh=7c67211ba137068e7be3d7091948b6aa&oe=604A8214"
        }
      ],
    }),
  });
};

exports.cost68 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          "text": `ค่าโดยสารรถเมล์ สายปอ.68 ( ครีม-แดง )`,
        },
        {
          "type": `text`,
          "text": `ต้นทาง - ปลายทาง : แสมดำ-บางลำพู
: 8 บาทตลอดสาย 👍`,
        },
        {
          "type": "sticker",
          "packageId": "11538",
          "stickerId": "51626499"
        }
      ],
    }),
  });
};

exports.cost101 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          "text": `ค่าโดยสารรถเมล์ สายปอ.101 ( ครีม-แดง ) 🎯💫`,
        },
        {
          "type": `text`,
          "text": `ต้นทาง : วัดม่วง
ปลายทาง : ถนนรัชดาภิเษก
ราคา : 8 - 9 บาทตลอดสาย`,
        },
        {
          "type": `text`,
          "text": `ต้นทาง : ถนนรัชดาภิเษก
ปลายทาง : ตลาดโพธิ์ทอง
ราคา : 8 - 9 บาทตลอดสาย`,
        },
        {
          "type": "sticker",
          "packageId": "2",
          "stickerId": "512"
        }
      ],
    }),
  });
};

exports.cost720 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          "text": `ค่าโดยสารรถเมล์ สายปอ.720 ( แดง ) ❣️`,
        },
        {
          "type": `text`,
          "text": `ต้นทาง : วงกลมกัลปพฤกษ์
ปลายทาง : พระราม2
: 8-9 บาทตลอดสาย 👍`,
        },
        {
          "type": "sticker",
          "packageId": "3",
          "stickerId": "184"
        }
      ],
    }),
  });
};

exports.cost21 = (bodyResponse) => {
  let result;
  result = 5 * 10;
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          // "text": `${result}`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.21 ค่า✨`,
        },
        {
          "type": `text`,
          "text": `1. สายปอ.21 สีส้ม 🧡 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647898447183882/210306_0.jpg",
        "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647898447183882/210306_0.jpg"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.21 สีครีม-น้ำเงิน 🧁💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647902842683432/210306.jpg",
        "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647902842683432/210306.jpg"
        }
      ],
    }),
  });
};

exports.cost75 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": `text`,
          "text": `ตารางค่าโดยสาร รถเมล์สายปอ.21 ค่า✨`,
        },
        {
          "type": `text`,
          "text": `1. สายปอ.75 สีส้ม 🧡 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647890712756264/210306_2.jpg",
        "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647890712756264/210306_2.jpg"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.75 สีครีม-น้ำเงิน 🧁💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647895297130526/210306_1.jpg",
        "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647895297130526/210306_1.jpg"
        }
      ],
    }),
  });
};