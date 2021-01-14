var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu4 = (bodyResponse) => {
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
                }, {
                    "type": "uri",
                    "label": "รถตู้",
                    "uri": "http://example.com/page/123"
                }]
            }
          },
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
                    "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/12108903_10208180116724645_3631630818427710441_n.jpg?_nc_cat=110&ccb=2&_nc_sid=825194&_nc_ohc=ZkrUXDYfiTEAX9VB4hq&_nc_ht=scontent.fbkk26-1.fna&oh=49945cccddc005126c6446a5517ad84c&oe=6020CAB9",
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
                },
                {
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
                  "hero": {
                    "type": "image",
                    "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/10426567_10204582179531779_3749660136859041770_n.jpg?_nc_cat=105&ccb=2&_nc_sid=825194&_nc_ohc=TQ90L3xjcBwAX-s6FT2&_nc_ht=scontent.fbkk26-1.fna&oh=8de2da56a4c08aefd462b0c712b81ed2&oe=6023F6B9",
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
              ]
            }
        }
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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=5idCW8bpP8kAX8rWPXY&_nc_ht=scontent.fbkk26-1.fna&oh=113efc92f87c99487da7fd2443d96758&oe=60212F99",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=5idCW8bpP8kAX8rWPXY&_nc_ht=scontent.fbkk26-1.fna&oh=113efc92f87c99487da7fd2443d96758&oe=60212F99"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.140 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=kfj6aaGc92oAX_dca9Y&_nc_ht=scontent.fbkk26-1.fna&oh=6532a7c089a3ebe90772fbafbbc1715c&oe=60215F74",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=kfj6aaGc92oAX_dca9Y&_nc_ht=scontent.fbkk26-1.fna&oh=6532a7c089a3ebe90772fbafbbc1715c&oe=60215F74"
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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=gZenmyPZrQsAX-3akhX&_nc_ht=scontent.fbkk26-1.fna&oh=afb4c5faf1dca05b8ca0d1a9a8c5d642&oe=6020204B",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=gZenmyPZrQsAX-3akhX&_nc_ht=scontent.fbkk26-1.fna&oh=afb4c5faf1dca05b8ca0d1a9a8c5d642&oe=6020204B"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.141 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=ZAkO3Ap-lJ8AX-SNfnD&_nc_ht=scontent.fbkk26-1.fna&oh=4a0244c6f55dcd34ede0b836c356e2e4&oe=6021768B",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=ZAkO3Ap-lJ8AX-SNfnD&_nc_ht=scontent.fbkk26-1.fna&oh=4a0244c6f55dcd34ede0b836c356e2e4&oe=6021768B"
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
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136789650_136755688171454_532772991029427241_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=cdHr2624jv8AX_ji5KN&_nc_ht=scontent.fbkk26-1.fna&oh=16292425d060aae4c203b47e285ded1c&oe=6022F13A",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136789650_136755688171454_532772991029427241_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=cdHr2624jv8AX_ji5KN&_nc_ht=scontent.fbkk26-1.fna&oh=16292425d060aae4c203b47e285ded1c&oe=6022F13A"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.76 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136489737_721293172158440_6529429187232138741_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=J3i8I96Xo-8AX8Ougr6&_nc_ht=scontent.fbkk26-1.fna&oh=c9b57247f450441d72919190e882fbf4&oe=60238F56",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136489737_721293172158440_6529429187232138741_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=J3i8I96Xo-8AX8Ougr6&_nc_ht=scontent.fbkk26-1.fna&oh=c9b57247f450441d72919190e882fbf4&oe=60238F56"
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
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137196266_3911695415560464_2686320589103231428_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=waUTehqIBZwAX_buHe-&_nc_ht=scontent.fbkk26-1.fna&oh=27ae10ca4629b8eecefb37f1fa24c26e&oe=60242E78",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137196266_3911695415560464_2686320589103231428_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=waUTehqIBZwAX_buHe-&_nc_ht=scontent.fbkk26-1.fna&oh=27ae10ca4629b8eecefb37f1fa24c26e&oe=60242E78"
        },
        {
          "type": `text`,
          "text": `2. สายปอ.105 สีฟ้า 💙 `,
        },
        {
        "type": "image",
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136380547_406136450472212_9067012664201701383_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=JDRo6kKkdvEAX_hWbED&_nc_ht=scontent.fbkk26-1.fna&oh=cfc2d439911e59eadc545b5740ba1d7d&oe=60244CF5",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/136380547_406136450472212_9067012664201701383_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=JDRo6kKkdvEAX_hWbED&_nc_ht=scontent.fbkk26-1.fna&oh=cfc2d439911e59eadc545b5740ba1d7d&oe=60244CF5"
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
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137682664_724074504974877_5219544373394094740_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=ywaVqijX1esAX9WvQbx&_nc_ht=scontent.fbkk26-1.fna&oh=b3bd068b9218845263afa1155d62ce57&oe=602603A9",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137682664_724074504974877_5219544373394094740_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=ywaVqijX1esAX9WvQbx&_nc_ht=scontent.fbkk26-1.fna&oh=b3bd068b9218845263afa1155d62ce57&oe=602603A9"
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
        "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138800628_152653566453620_4220596220363716484_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=CaZgW275NTEAX-O76Ab&_nc_ht=scontent.fbkk26-1.fna&oh=aee003c6ca4f75a28d4267500a8e23bd&oe=6026E994",
        "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138800628_152653566453620_4220596220363716484_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=CaZgW275NTEAX-O76Ab&_nc_ht=scontent.fbkk26-1.fna&oh=aee003c6ca4f75a28d4267500a8e23bd&oe=6026E994"
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
