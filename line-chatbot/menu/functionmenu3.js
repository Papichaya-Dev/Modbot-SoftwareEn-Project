var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu3 = (bodyResponse) => {
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
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/93566011_2871809409600862_8298071515329462272_n.jpg?_nc_cat=110&ccb=2&_nc_sid=b9115d&_nc_ohc=2tNeeh1pEowAX-NoNV7&_nc_ht=scontent.fbkk26-1.fna&oh=28298b34e0c91ebe38809ea359fe0c60&oe=60208906",
                  "action": {
                    "type": "message",
                    "label": ": รถเมล์ ",
                    "text": "ตารางเวลารถเมล์"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/63481053_10156054482342038_4804749123414654976_o.jpg?_nc_cat=100&ccb=2&_nc_sid=b9115d&_nc_ohc=9wWVrF7rSssAX-YtXxo&_nc_ht=scontent.fbkk26-1.fna&oh=ed1dbb31b4b1bb626351a7e7eb315562&oe=6022254F",
                  "action": {
                    "type": "message",
                    "label": ": รถตู้",
                    "text": "ตารางเวลาเดินรถตู้"
                  }
                },
                {
                  "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/81542668_2879253665472249_7609980658877726720_o.jpg?_nc_cat=107&ccb=2&_nc_sid=825194&_nc_ohc=GfM34WNOJKsAX9T7B9d&_nc_ht=scontent.fbkk26-1.fna&oh=db096c2e25300cf3e1c9039d5844c9b3&oe=60234E0F",
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
                "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/122572275_1573661892841847_1133140489154909471_o.jpg?_nc_cat=107&ccb=2&_nc_sid=825194&_nc_eui2=AeH6WNSAwew5b5QEIq4Ces2eaJne5xPVEStomd7nE9URK6PMMISMWrToGLEs_g3tJxUqfK3u5TKibRXbjgAhLlYW&_nc_ohc=UgVM9j3nXMQAX_e9ii-&_nc_ht=scontent.fbkk26-1.fna&oh=127d5c1b43584999b0790de0054c38d2&oe=603C8431",
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
            "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/139501727_810056826209328_3522196241647953742_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=xtLKNNKle_0AX8aVDoy&_nc_ht=scontent.fbkk26-1.fna&oh=66ea0d5ff53ff6eaf5a2d7a0d05cac9c&oe=602B9BD4",
            "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/139501727_810056826209328_3522196241647953742_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=xtLKNNKle_0AX8aVDoy&_nc_ht=scontent.fbkk26-1.fna&oh=66ea0d5ff53ff6eaf5a2d7a0d05cac9c&oe=602B9BD4"
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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/143263951_803269323559960_6941044423760613391_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHHFOvKiDtJNCYiHCWS0D1Qc5-pmQSfzmxzn6mZBJ_ObJoVBbg2mbcei-QacdqUWxePsGov-KUGLdF-8qPh11Gh&_nc_ohc=hn7wrsSQJS4AX96p1xo&_nc_ht=scontent.fbkk26-1.fna&oh=d65f26f922d53fbe88fff11a546be2b5&oe=603B6030",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/143263951_803269323559960_6941044423760613391_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHHFOvKiDtJNCYiHCWS0D1Qc5-pmQSfzmxzn6mZBJ_ObJoVBbg2mbcei-QacdqUWxePsGov-KUGLdF-8qPh11Gh&_nc_ohc=hn7wrsSQJS4AX96p1xo&_nc_ht=scontent.fbkk26-1.fna&oh=d65f26f922d53fbe88fff11a546be2b5&oe=603B6030"
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
            "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/144105149_172095227651092_8704814005627039131_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEWE6csMGhC_Lrr7bIRCJQMmEUxgU3DSr6YRTGBTcNKvrORXBbJZH5X2UtMKiiJRSG5ixW25vFgzcXq5qtcWxbM&_nc_ohc=OKLa6QHNSa0AX_Zz4rJ&_nc_ht=scontent.fbkk26-1.fna&oh=abd42dbfca94558b6b25e87a52584004&oe=6038DE7D",
            "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/144105149_172095227651092_8704814005627039131_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEWE6csMGhC_Lrr7bIRCJQMmEUxgU3DSr6YRTGBTcNKvrORXBbJZH5X2UtMKiiJRSG5ixW25vFgzcXq5qtcWxbM&_nc_ohc=OKLa6QHNSa0AX_Zz4rJ&_nc_ht=scontent.fbkk26-1.fna&oh=abd42dbfca94558b6b25e87a52584004&oe=6038DE7D"
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
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/144259511_137357671539613_668224405005835660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_eui2=AeFn83pvg0D3-wimBPpWBJJiBAhNwa6stu8ECE3Brqy27w7TLvr_V9PZxtRmJRM_Xc_58OJWynUVx63GLRzH5-rm&_nc_ohc=-BYgbZ-OQ7QAX8Vpjp7&_nc_ht=scontent.fbkk26-1.fna&oh=88470e4df8c13c71fcc8b436833b2558&oe=60391E5F",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/144259511_137357671539613_668224405005835660_n.jpg?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_eui2=AeFn83pvg0D3-wimBPpWBJJiBAhNwa6stu8ECE3Brqy27w7TLvr_V9PZxtRmJRM_Xc_58OJWynUVx63GLRzH5-rm&_nc_ohc=-BYgbZ-OQ7QAX8Vpjp7&_nc_ht=scontent.fbkk26-1.fna&oh=88470e4df8c13c71fcc8b436833b2558&oe=60391E5F"
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
            "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/139118048_231795501853031_7790000587561954200_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=yIrK7TOU68AAX-oJ42U&_nc_ht=scontent.fbkk26-1.fna&oh=3a7f27e268c350f46712578558ed335c&oe=602CB7AB",
            "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/139118048_231795501853031_7790000587561954200_n.jpg?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=yIrK7TOU68AAX-oJ42U&_nc_ht=scontent.fbkk26-1.fna&oh=3a7f27e268c350f46712578558ed335c&oe=602CB7AB"
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