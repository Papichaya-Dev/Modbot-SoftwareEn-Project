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
              "title": "อัตราค่าโดยสาร",
              "text": "กรุณาเลือกประเภทรถโดยสาร",
              "actions": [
                {
                  "type": "message",
                  "label": "รถเมล์",
                  "text": "ราคารถเมล์"
                },
                {
                  "type": "message",
                  "label": "รถตู้",
                  "text": "ราคารถตู้"
                },
                {
                  "type": "message",
                  "label": "รถแดง",
                  "text": "ราคารถแดง"
                }
              ]
            }
          }
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
            "originalContentUrl": "https://www.linkpicture.com/q/143455532_453731682663639_6359531019067275558_n.jpg",
            "previewImageUrl": "https://www.linkpicture.com/q/143455532_453731682663639_6359531019067275558_n.jpg"
          },
          {
            "type": "image",
            "originalContentUrl": "https://www.linkpicture.com/q/141610688_448286789641744_290327311011225824_n.jpg",
            "previewImageUrl": "https://www.linkpicture.com/q/141610688_448286789641744_290327311011225824_n.jpg"
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
          type: `text`,
          text: "กรุณาเลือกราคาสายรถเมล์ที่คุณอยากทราบด้านล่างได้เลยค่า 💸👇",
        },
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
                  "text": "🌻 สายรถเมล์ที่ราคาเเตกต่างกัน 🌻",
                  "contents": []
                }
              ]
            },
            "hero": {
              "type": "image",
              "url": "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/p960x960/33308734_2209579332416082_5649981670607028224_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=825194&_nc_eui2=AeFIuVlXbxVDuiDDDfpHREQXX7CXzAgVFkNfsJfMCBUWQ7sSXMljJ6qPTASfl1dhNhz8jB_yJYWfWz13jDR0P1zQ&_nc_ohc=hT3njB9rvU4AX9Gh6qB&_nc_ht=scontent.fbkk12-1.fna&tp=6&oh=aa82e91d2acbf49ee1048a684447d35c&oe=6074FF3E",
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
          "originalContentUrl": "https://www.linkpicture.com/q/137622782_438753510493430_1685445233253631429_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/137622782_438753510493430_1685445233253631429_n.jpg"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.140 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://www.linkpicture.com/q/137544527_396241328348727_908912891211030604_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/137544527_396241328348727_908912891211030604_n.jpg"
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
          "originalContentUrl": "https://www.linkpicture.com/q/137621467_235703318067874_9159980072699741669_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/137621467_235703318067874_9159980072699741669_n.jpg"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.141 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://www.linkpicture.com/q/138205842_412562036722784_8621213197609621652_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/138205842_412562036722784_8621213197609621652_n.jpg"
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
        "originalContentUrl": "https://www.linkpicture.com/q/136789650_136755688171454_532772991029427241_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/136789650_136755688171454_532772991029427241_n.jpg"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.76 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://www.linkpicture.com/q/136489737_721293172158440_6529429187232138741_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/136489737_721293172158440_6529429187232138741_n.jpg"
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
        "originalContentUrl": "https://www.linkpicture.com/q/137196266_3911695415560464_2686320589103231428_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/137196266_3911695415560464_2686320589103231428_n.jpg"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.105 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://www.linkpicture.com/q/136380547_406136450472212_9067012664201701383_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/136380547_406136450472212_9067012664201701383_n.jpg"
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
        "originalContentUrl": "https://www.linkpicture.com/q/137682664_724074504974877_5219544373394094740_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/137682664_724074504974877_5219544373394094740_n.jpg"
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
        "originalContentUrl": "https://www.linkpicture.com/q/138800628_152653566453620_4220596220363716484_n.jpg",
        "previewImageUrl": "https://www.linkpicture.com/q/138800628_152653566453620_4220596220363716484_n.jpg"
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