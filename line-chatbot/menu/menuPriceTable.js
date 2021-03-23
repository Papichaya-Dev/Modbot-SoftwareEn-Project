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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/143455532_453731682663639_6359531019067275558_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEpjMTLFvn1spmjkBgr2QPBfeus2_YEyzx966zb9gTLPNMo6-S2_Rbez0DiJY_0Reeo4-nsiKKvCMN6gvBNIQ6a&_nc_ohc=oOmY3B4n7csAX8j6rwo&_nc_ht=scontent.fbkk26-1.fna&oh=a3706b2bcaa3bdda8a8c0f678138cf72&oe=603968D0",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/143455532_453731682663639_6359531019067275558_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEpjMTLFvn1spmjkBgr2QPBfeus2_YEyzx966zb9gTLPNMo6-S2_Rbez0DiJY_0Reeo4-nsiKKvCMN6gvBNIQ6a&_nc_ohc=oOmY3B4n7csAX8j6rwo&_nc_ht=scontent.fbkk26-1.fna&oh=a3706b2bcaa3bdda8a8c0f678138cf72&oe=603968D0"
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/141610688_448286789641744_290327311011225824_n.jpg?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_eui2=AeG3jkluXUyDiWm55ewU7LbaZlKgkO_zB0JmUqCQ7_MHQuUJ9DpIBDY2zXoJcn0sr0xiZHyYst0NU7ugwrIOJRYD&_nc_ohc=nJr5mHYcfS4AX-ByG1b&_nc_ht=scontent.fbkk26-1.fna&oh=660bec772e06720b72b2ff5c3fd95aad&oe=6039EF58",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/141610688_448286789641744_290327311011225824_n.jpg?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_eui2=AeG3jkluXUyDiWm55ewU7LbaZlKgkO_zB0JmUqCQ7_MHQuUJ9DpIBDY2zXoJcn0sr0xiZHyYst0NU7ugwrIOJRYD&_nc_ohc=nJr5mHYcfS4AX-ByG1b&_nc_ht=scontent.fbkk26-1.fna&oh=660bec772e06720b72b2ff5c3fd95aad&oe=6039EF58"
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
                    "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/12108903_10208180116724645_3631630818427710441_n.jpg?_nc_cat=110&ccb=3&_nc_sid=825194&_nc_ohc=jiqoIo5j0sUAX8Wv28C&_nc_ht=scontent.fbkk26-1.fna&oh=65fc6b71ceab2a25a05fb16af2fa0735&oe=604C4C39",
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
                    "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t31.0-8/p960x960/21741021_1576768605702918_5925591985717274250_o.jpg?_nc_cat=104&ccb=3&_nc_sid=825194&_nc_ohc=6Gv9hXNEhikAX_C8UUD&_nc_ht=scontent.fbkk26-1.fna&tp=6&oh=fe262fff2ec196e01d868bce7422c39f&oe=604D51A7",
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
