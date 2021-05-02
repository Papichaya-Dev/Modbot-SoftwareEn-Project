var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.menuTimebus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "กรุณาเลือกประเภทรถโดยสารที่คุณต้องการทราบได้เลยค่ะ 📌",
          },
          {
            "type": "template",
            "altText": "this is an image carousel template",
            "template": {
              "type": "image_carousel",
              "columns": [
                {
                  "imageUrl": "https://www.linkpicture.com/q/93566011_2871809409600862_8298071515329462272_n.jpg",
                  "action": {
                    "type": "message",
                    "label": ": รถเมล์ ",
                    "text": "ตารางเวลารถเมล์"
                  }
                },
                {
                  "imageUrl": "https://www.linkpicture.com/q/63481053_10156054482342038_4804749123414654976_n.jpg",
                  "action": {
                    "type": "message",
                    "label": ": รถตู้",
                    "text": "ตารางเวลาเดินรถตู้"
                  }
                },
                {
                  "imageUrl": "https://www.linkpicture.com/q/81542668_2879253665472249_7609980658877726720_n.jpg",
                  "action": {
                    "type": "message",
                    "label": ": รถแดง",
                    "text": "ตารางเวลาเดินรถแดง"
                  }
                }
              ]
            }
          }
        ],
      }),
    });
  };
  
  exports.timebus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            "text": `กรุณาเลือกสายรถเมล์ที่คุณอยากทราบตารางเวลาด้านล่างได้เลยค่า ᵔᴥᵔ`,
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
                    "text": "🌷 กรุณาเลือกสายรถเมล์ได้เลยค่ะ 🌷",
                    "contents": []
                  }
                ]
              },
              "hero": {
                "type": "image",
                "url": "https://www.linkpicture.com/q/107008952_599658580968882_2976526492062762330_n.jpg",
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
                      "label": "ปอ.105",
                      "text": "ตารางเวลาเดินรถปอ.105"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.141",
                      "text": "ตารางเวลาเดินรถปอ.141"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.720",
                      "text": "ตารางเวลาเดินรถปอ.720"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.101",
                      "text": "ตารางเวลาเดินรถปอ.101"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.68",
                      "text": "ตารางเวลาเดินรถปอ.68"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.76",
                      "text": "ตารางเวลาเดินรถปอ.76"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.140",
                      "text": "ตารางเวลาเดินรถปอ.140"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                ]
              }
            }
        }
        ],
      }),
    });
  };
  
  exports.resulttimebus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": "image",
            "originalContentUrl": "https://www.cityupdate.in.th/chiangmai/wp-content/uploads/sites/2/2016/06/RTC-time-2020.jpg",
            "previewImageUrl": "https://www.cityupdate.in.th/chiangmai/wp-content/uploads/sites/2/2016/06/RTC-time-2020.jpg"
        }
        ],
      }),
    });
  };

exports.timebus105 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ตารางเดินรถเมล์ ปอ.105 ค่า 🚀",
          },
          {
            "type": "image",
            "originalContentUrl": "https://www.linkpicture.com/q/139501727_810056826209328_3522196241647953742_n.jpg",
            "previewImageUrl": "https://www.linkpicture.com/q/139501727_810056826209328_3522196241647953742_n.jpg"
        }
        ],
      }),
  });
};

exports.timebus140 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตารางเดินรถเมล์ ปอ.140 ค่ะ ✨",
        },
        {
          "type": "image",
          "originalContentUrl": "https://www.linkpicture.com/q/143263951_803269323559960_6941044423760613391_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/143263951_803269323559960_6941044423760613391_n.jpg"
      }
      ],
    }),
});
};

exports.timebus76 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ตารางเดินรถเมล์ ปอ.76 ค่า 🌈",
          },
          {
            "type": "image",
            "originalContentUrl": "https://www.linkpicture.com/q/144105149_172095227651092_8704814005627039131_n.jpg",
            "previewImageUrl": "https://www.linkpicture.com/q/144105149_172095227651092_8704814005627039131_n.jpg"
        }
        ],
      }),
    });
};

exports.timebus141 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตารางเดินรถเมล์ ปอ.141 ค่า 💖",
        },
        {
          "type": "image",
          "originalContentUrl": "https://www.linkpicture.com/q/144259511_137357671539613_668224405005835660_n.jpg",
          "previewImageUrl": "https://www.linkpicture.com/q/144259511_137357671539613_668224405005835660_n.jpg"
      }
      ],
    }),
  });
};

  exports.timebusvan = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ตารางเวลาเดินรถตู้ค่า 🚀",
          },
          {
            "type": "image",
            "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817693474962276372/Time_210306_2.jpg",
            "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817693474962276372/Time_210306_2.jpg"
        }
        ],
      }),
    });
  };

exports.timeminibus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "สำหรับเวลาเดินรถของรถเเดงนะคะ ⏰",
          },
          {
            type: `text`,
            "text": `เวลาออกเริ่มตั้งเเต่ : 05.30 น.
เวลารถหมด : 23.00 น.`,
          },
          {
            type: `text`,
            "text": `❗️หมายเหตุ❗️ 
ถ้าไม่ติดธุระอะไร เผื่อเวลาขึ้นรถก่อน 22.40 น. จะดีกว่ารอจนถึง 23.00 น.นะคะ 
เผื่อรถหมดเร็วในบางวันค่า ღゝ◡╹)ノ♡`,
          },
        ],
      }),
    });
};

exports.timebus720 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตารางเดินรถเมล์ ปอ.720 ค่ะ ✨",
        },
        {
          "type": "image",
          "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647901902766090/Time_210306_1.jpg",
          "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647901902766090/Time_210306_1.jpg"
        }
      ],
    }),
  });
};

exports.timebus101 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตารางเดินรถเมล์ ปอ.101 ค่ะ ✨",
        },
        {
          "type": "image",
          "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647905917108234/Time_210306_0.jpg",
          "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647905917108234/Time_210306_0.jpg"
        }
      ],
    }),
  });
};

exports.timebus68 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "ตารางเดินรถเมล์ ปอ.68 ค่ะ ✨",
        },
        {
          "type": "image",
          "originalContentUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647906084356106/Time_210306.jpg",
          "previewImageUrl": "https://cdn.discordapp.com/attachments/811905229292961793/817647906084356106/Time_210306.jpg"
        }
      ],
    }),
  });
};