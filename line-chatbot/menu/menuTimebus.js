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
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-0/p600x600/93566011_2871809409600862_8298071515329462272_n.jpg?_nc_cat=110&ccb=3&_nc_sid=b9115d&_nc_ohc=bPJx0VsJQxAAX-spLrG&_nc_ht=scontent.fbkk26-1.fna&tp=6&oh=eac1a3942fbdd9ef2c2a6054bed6883a&oe=604CFB38",
                  "action": {
                    "type": "message",
                    "label": ": รถเมล์ ",
                    "text": "ตารางเวลารถเมล์"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/63481053_10156054482342038_4804749123414654976_o.jpg?_nc_cat=100&ccb=3&_nc_sid=b9115d&_nc_ohc=2__OQQeZAwQAX9vMMG8&_nc_ht=scontent.fbkk26-1.fna&oh=1745f2bbfd1f1303f53fd3deb4f4fedd&oe=604DA6CF",
                  "action": {
                    "type": "message",
                    "label": ": รถตู้",
                    "text": "ตารางเวลาเดินรถตู้"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/81542668_2879253665472249_7609980658877726720_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=825194&_nc_eui2=AeG2ntCtpnfo8-pT_NlBdDYffIl7YbIrJo98iXthsismj_Qga641vAblUc1wch4xN6a98Z8lW0MisVOaIBb4cmks&_nc_ohc=mEZEDybj6ggAX-vUOsm&_nc_ht=scontent.fbkk13-2.fna&oh=3831a8645ba2df3b01659e48bd72c394&oe=6072680F",
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
                "url": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/122572275_1573661892841847_1133140489154909471_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=825194&_nc_eui2=AeH6WNSAwew5b5QEIq4Ces2eaJne5xPVEStomd7nE9URK6PMMISMWrToGLEs_g3tJxUqfK3u5TKibRXbjgAhLlYW&_nc_ohc=f5CVsErDhWQAX_qbFvc&_nc_ht=scontent.fbkk13-2.fna&oh=a28f26a301987852eeb428115fa74192&oe=6073E331",
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
                  }
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
            "originalContentUrl": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/139501727_810056826209328_3522196241647953742_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_eui2=AeEibienz1GiT3tlVROt8-xmbHhD6E2JYLFseEPoTYlgsaf3NShYL0rBcX202FbGffAvOHdSqkcufF0lmfQVP1M1&_nc_ohc=82X2uDPCyEwAX8fZjX4&_nc_ht=scontent.fbkk12-3.fna&oh=13b018860965685510dcf1c4a623f5f3&oe=6062FAD4",
            "previewImageUrl": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/139501727_810056826209328_3522196241647953742_n.jpg?_nc_cat=102&ccb=3&_nc_sid=ae9488&_nc_eui2=AeEibienz1GiT3tlVROt8-xmbHhD6E2JYLFseEPoTYlgsaf3NShYL0rBcX202FbGffAvOHdSqkcufF0lmfQVP1M1&_nc_ohc=82X2uDPCyEwAX8fZjX4&_nc_ht=scontent.fbkk12-3.fna&oh=13b018860965685510dcf1c4a623f5f3&oe=6062FAD4"
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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/145372811_323526159066209_4056407838896730748_n.jpg?_nc_cat=103&ccb=2&_nc_sid=ae9488&_nc_ohc=2mUzCzKL-IYAX9RCjhJ&_nc_ht=scontent.fbkk26-1.fna&oh=d960a6f7035dc995cc9121278713a76b&oe=60432E8C",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/145372811_323526159066209_4056407838896730748_n.jpg?_nc_cat=103&ccb=2&_nc_sid=ae9488&_nc_ohc=2mUzCzKL-IYAX9RCjhJ&_nc_ht=scontent.fbkk26-1.fna&oh=d960a6f7035dc995cc9121278713a76b&oe=60432E8C"
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
            "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/146316261_449886383126085_1104297254853192060_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=CLeBJ7sdJUMAX-Qlp3m&_nc_oc=AQn6PCXNRet7kjPmO7sDjSm8gyyhWHXZTMSivgZChVJyoJOJqg8ijZ1d7IIAu5raBnE&_nc_ht=scontent.fbkk26-1.fna&oh=77d4dd1aca6b4d19411b275de6f4b24f&oe=6043D443",
            "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/146316261_449886383126085_1104297254853192060_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=CLeBJ7sdJUMAX-Qlp3m&_nc_oc=AQn6PCXNRet7kjPmO7sDjSm8gyyhWHXZTMSivgZChVJyoJOJqg8ijZ1d7IIAu5raBnE&_nc_ht=scontent.fbkk26-1.fna&oh=77d4dd1aca6b4d19411b275de6f4b24f&oe=6043D443"
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
          "originalContentUrl": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/144259511_137357671539613_668224405005835660_n.jpg?_nc_cat=104&ccb=3&_nc_sid=ae9488&_nc_eui2=AeFn83pvg0D3-wimBPpWBJJiBAhNwa6stu8ECE3Brqy27w7TLvr_V9PZxtRmJRM_Xc_58OJWynUVx63GLRzH5-rm&_nc_ohc=o-FKP6dLWK4AX-lq5L5&_nc_ht=scontent.fbkk12-2.fna&oh=cca1fdeb917c85b62cfc028840854451&oe=60649FDF",
          "previewImageUrl": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/144259511_137357671539613_668224405005835660_n.jpg?_nc_cat=104&ccb=3&_nc_sid=ae9488&_nc_eui2=AeFn83pvg0D3-wimBPpWBJJiBAhNwa6stu8ECE3Brqy27w7TLvr_V9PZxtRmJRM_Xc_58OJWynUVx63GLRzH5-rm&_nc_ohc=o-FKP6dLWK4AX-lq5L5&_nc_ht=scontent.fbkk12-2.fna&oh=cca1fdeb917c85b62cfc028840854451&oe=60649FDF"
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