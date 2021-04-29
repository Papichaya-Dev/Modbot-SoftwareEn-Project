var request = require("request");

// Your Channel access token
const config = require('../config')
const userTravel = require('../model/UserTravel')
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.menuTravel = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "สนใจจะไปย่านไหนดีคะ ʕ•ᴥ•ʔˏ🖼",
        },
        {
          "type": "flex",
          "altText": "Flex Message",
          "contents": {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "size": "micro",
                "hero": {
                  "type": "image",
                  "url": "https://www.wheredowego.in.th/wp-content/uploads/2017/04/Cover_Thonburi3.jpg",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "320:213"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เที่ยวฝั่งธนฯ ",
                      "weight": "bold",
                      "size": "sm",
                      "wrap": true
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "text",
                          "text": "5.0",
                          "size": "xs",
                          "color": "#8c8c8c",
                          "margin": "md",
                          "flex": 0
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "baseline",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "text",
                              "text": "กรุงเทพมหานคร",
                              "wrap": true,
                              "color": "#8c8c8c",
                              "size": "xs",
                              "flex": 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "spacing": "sm",
                  "paddingAll": "13px"
                },
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "เที่ยวฝั่งธนฯ"
                }
              },
              {
                "type": "bubble",
                "size": "micro",
                "hero": {
                  "type": "image",
                  "url": "https://dayself.com/wp-content/uploads/2020/09/%E0%B8%9B%E0%B8%81-9.jpg",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "320:213"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ย่านจุฬา - สามย่าน",
                      "weight": "bold",
                      "size": "sm"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                        },
                        {
                          "type": "text",
                          "text": "4.0",
                          "size": "sm",
                          "color": "#8c8c8c",
                          "margin": "md",
                          "flex": 0
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "baseline",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "text",
                              "text": "กรุงเทพมหานคร",
                              "wrap": true,
                              "color": "#8c8c8c",
                              "size": "xs",
                              "flex": 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "spacing": "sm",
                  "paddingAll": "13px"
                },
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "เที่ยวย่านจุฬา-สยาม-สามย่าน"
                }
              },
              {
                "type": "bubble",
                "size": "micro",
                "hero": {
                  "type": "image",
                  "url": "https://widsawacom.files.wordpress.com/2019/11/1-1.jpg?w=720",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "320:213"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ย่านเจริญกรุง - บางรัก",
                      "weight": "bold",
                      "size": "sm",
                      "wrap": true
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                        },
                        {
                          "type": "icon",
                          "size": "xs",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                        },
                        {
                          "type": "text",
                          "text": "4.0",
                          "size": "sm",
                          "color": "#8c8c8c",
                          "margin": "md",
                          "flex": 0
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "baseline",
                          "spacing": "sm",
                          "contents": [
                            {
                              "type": "text",
                              "text": "กรุงเทพมหานคร",
                              "wrap": true,
                              "color": "#8c8c8c",
                              "size": "xs",
                              "flex": 5
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "spacing": "sm",
                  "paddingAll": "13px"
                },
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "เที่ยวย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }        },     
      ],
    }),
  });
};
exports.travelThonburi = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "อยากไปเที่ยวแนวไหนเลือกได้เลยค่า 📌",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://www.clipartmax.com/png/middle/134-1346093_coffee-takeaway-icon-flat-coffee-icon-png.png",
                "action": {
                  "type": "message",
                  "label": "คาเฟ่นั่งชิล",
                  "text": "คาเฟ่นั่งชิลฝั่งธน"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://cdn0.iconfinder.com/data/icons/navigation-and-map-1/85/map_location_city_street_pin_marker-512.png",
                "action": {
                  "type": "message",
                  "label": "สตรีทอาร์ต",
                  "text": "สตรีทอาร์ตฝั่งธนฯ"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://i.dlpng.com/static/png/4744169-apostle-hand-emoji-gesture-hand-together-hands-pray-praying-icon-2-people-praying-png-512_512_preview.png",
                "action": {
                  "type": "message",
                  "label": "วัด",
                  "text": "วัดฝั่งธน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.thonburiCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821806332956115014/Capture.JPG",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "บ้านอากงอาม่า"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821808983643652146/unknown.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Home Walden Cafe"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832649217024458802/comeescape.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Come Escape Cafe"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821812686052261888/unknown.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Niyai Cafe"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821814827839127612/unknown.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "hint coffee"
                }
              }
            ]
          }
        }
      ],
    }),
  });
};

exports.myGrandparentsHouse = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [

        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821999971464773652/db4cafb160c9a9ad.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/821835094737682482/grands.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `           🎐 บ้านอากงอาม่า 🎐 
☛ คาเฟ่ย่านคลองสานฝั่งธนฯ ที่นำบ้านเก่าที่เป็นเรือนไทยทรงปั้นหยาสุดคลาสสิคให้ฟีลลิ่งจีนๆ ที่ตั้งอยู่บนโลเคชั่นริมแม่น้ำเจ้าพระยา
☞ สำหรับที่นั่งก็มีให้เลือกหลากหลายมุม ใครที่ต้องการจะได้ภาพชิคๆ พร้อมชมวิวแม่น้ำเจ้าพระยาไปด้วยก็ต้องมานั่งที่มุมระเบียงริมน้ำ
☞ เมนูเครื่องดื่มก็เป็นเมนูแบบง่ายๆ อย่างเช่นเก็กฮวย-เฉาก๋วยโบราณสูตรอาม่า และยังมีของทานเล่นอย่างขนมปัง เกี๊ยวซ่า ขนมไทย ฯลฯ 
เลิกงานแล้วไม่รู้จะไปที่ไหนลองมาเสพบรรยากาศสุดคลาสสิคที่นี่เลย บ้านอากงอาม่า ~`,
        },
//         {
//           "type": `text`,
//           "text": `📍 Location: 253 ซ.สมเด็จเจ้าพระยา3 ถ.เจ้าพระยา เขตคลองสาน กรุงเทพฯ
// 🏷️ Open – Close: เปิดทุกวันเวลา 10.00 – 18.00 น.
// 📞 Phone: 02 437 5183 
// 👍 Facebook: www.facebook.com/mygpshouse/`,
//         },
        {
          "type": "text", // ①
          "text": `📍 Location: 253 ซ.สมเด็จเจ้าพระยา3 ถ.เจ้าพระยา เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: เปิดทุกวันเวลา 10.00 – 18.00 น.
📞 Phone: 02 437 5183 
👍 Facebook: www.facebook.com/mygpshouse/`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่ย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.homeWaldenCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822061800115011584/walden-home.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `        🍵 Home Walden Cafe 🍵 
☛ โฮมคาเฟ่สุดน่ารักที่ซ่อนตัวอยู่ในตึกแถวคูหาเล็กๆ ให้ฟีลลิ่งเหมือนได้ไปนั่งพูดคุยกันที่บ้านเพื่อน ภายในตัวร้านประดับประดาไปด้วยของตกแต่งแนววินเทจมากมาย
☞ และยังคัดสรรเฟอร์นิเจอร์ที่ตกแต่งตัวร้านได้อย่างลงตัวให้กลิ่นอายแบบคลาสสิคสุดๆ เพียงแค่เดินเข้ามาในตัวร้านก็ได้ความรู้สึกชิลล์ๆ กับบรรยากาศและเสียงเพลงเบาๆ`,
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822061822789550110/walden-home2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `☞ เมนูของที่นี่ก็มีทั้งเมนูเครื่องดื่ม อาหาร และขนม ที่เป็นสไตล์โฮมเมด นอกจากนี้ภายในตัวร้านยังมีมุมถ่ายรูปสวยๆ สไตล์คลาสสิคเพียบ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 451 ถ.เจ้าพระยา เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: ร้านเปิดเวลา 09.00 – 18.00 น. ร้านปิดทุกวันอังคาร
📞 Phone: 062 362 9915 
👍 Facebook: www.facebook.com/waldenhomecafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่ย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.comeEscapeCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        // {
        //   "type": "text", // ①
        //   "text": `https://www.youtube.com/watch?v=SqRuniFT_ks&ab_channel=Sunnyontour`,
        // },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822142700169199627/comeescape1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `      🌵 COME escape cafe 🌵 
☛ คาเฟ่ในสวนเล็กๆ ที่เน้นสีขาวในการตกแต่ง และยังมีซิกเนเจอร์เป็นสวนแคคตัสที่อยู่รอบๆ บริเวนณตัวร้าน สำหรับที่นั่งก็มีให้เลือกทั้งแบบอินดอร์และแบบเอ้าท์ดอร์
☞ บริเวณรอบๆ ตัวร้านยังมีมุมถ่ายรูปฮิปๆ อย่างที่นั่งบนต้นไม้ หรือจะเปลี่ยนไปถ่ายรูปกับแคคตัสก็รับรองว่าได้รูปแบบฮิปๆ ไปอวดเพื่อนอย่างแน่นอน`,
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822142705844355072/comeescape2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `☞ และแน่นอนมาถึงที่นี่แล้วก็ต้องไม่พลาดกินเมนูเด็ดๆ อย่างเค้กมะพร้าวรสชาติสุดละมุนและเครื่องดื่มกาแฟรสชาติดี นอกจากนี้แล้วยังมีเมนูเครื่องดื่มและเบเกอร์รี่อีกมากมาย`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 119/1 ซ.ราชพฤกษ์ 6 แขวงบางจาก เขตภาษีเจริญ กรุงเทพฯ
🏷️ Open – Close: ร้านเปิดเวลา 10:00 – 18:00 
📞 Phone: 092 449 8890
👍 Facebook: www.facebook.com/comeescapecafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่ย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.niyaiCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822148315981283398/niyai.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822148318669963294/niyai2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `           📜 Niyai cafe 📜
☛ นิยาย คาเฟ่ในสวนสไตล์วินเทจ ที่ตอบโจทย์สำหรับคนรักความคลาสสิคอย่างแน่นอน ภายในตัวร้านเน้นการใช้สีขาวเป้นสีหลักเพื่อความละมุนและดูสะอาดตา
☞ ที่นั่งภายในตัวร้านยังมีให้เลือกหลายมุมและที่สำคัญโต๊ะและเก้าอี้ยังมีความเป็นวินเทจอีกด้วย`,
        },
        {
          "type": "text", // ①
          "text": `☞ สำหรับเมนูอาหารก็มีให้เลือกของคาวและของหวานไม่ว่าจะเป็น ข้าวหมูอบน้ำผึ้ง  สปาเก็ตตี้พริกแห้งเบคอนและขนมเค้กต่างๆ เลิกงานแล้วไม่รู้จะไปไหนลองมาหาเมนูอร่อยเป้นมื้อเย็นที่นี่ได้นะ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอยทุ่งมังกร 6 แขวงฉิมพลี เขตตลิ่งชัน กรุงเทพ
🏷️ Open – Close: เปิดวันจันทร์ – ศุกร์ 10.30 – 19.30 น. 
วันเสาร์ – อาทิตย์ 08.30 – 18:30 
* (หยุดทุกวันพุธ)
📞 Phone: 063 443 1961
👍 Facebook: www.facebook.com/niyaicafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่ย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.hintCoffee = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822808582096551936/hint1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `            ☕ hint coffee ☕
☛ คาเฟ่สีขาวสไตล์มินิมอลเกาหลีในย่านฝั่งธน ภายในมี 2 ชั้น ตกแต่งด้วยโทนสีขาวดูสะอาดตา ด้านหน้าตกแต่งเรียบๆ มีความเก๋ที่บันไดด้านข้างร้าน
☞ พร้อมป้าย Hint สุดมินิมอล บอกเลยใครมาถ่ายมุมนี้ ยังไงก็ไม่เหมือนอยู่ประเทศไทย ยิ่งแต่งตัวชิคๆ มาอีกนะ รับรองว่าคูล!`,
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822808583745306624/hint-2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `☞ ซิกเนเจอร์ของร้านนี้คือเมนูกาแฟเป็นหลัก โดยที่ร้านเมนูกาแฟสไตล์เกาหลียอดฮิตอย่าง Dalgona ในชื่อเมนู Hint Coffee 
ซึ่งมีความพิเศษตรงที่ก่อนดื่มจะต้องใช้ช้อนทุบแผ่นน้ำตาลเคลือบด้านบนก่อนดื่ม เก๋สุดๆ
☞ หรือใครไม่ดื่มกาแฟ ที่ร้านก็มีเมนูแบบ non-coffee ไว้ให้บริการเช่นกัน ไม่ว่าจะเป็น strawberry / peach โซดา ในส่วนของขนมที่มาแล้วต้องสั่งก็จะมี yogurt rare cheesecake รสชาติเข้มข้น หอมละมุนสุดๆ `,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอยกรุงธนบุรี 10 แขวงคลองต้นไทร เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: 09.30 - 17.30 น. (หยุดวันจันทร์)
📞 Phone: 08-0937-8762
👍 Facebook: www.facebook.com/Hintcoffee-115977776902444`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่ย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.streetArtThonburi = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า 🎨",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://1.bp.blogspot.com/-pIn7uGsQGTs/XFLHbdYC6nI/AAAAAAABAK4/APW6bq2pRIU-iCGZ6mixaQa-sIzjq2wuwCLcBGAs/s1600/IMG_20190105_132048-01-01.jpeg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "ล้ง1919"
                }
              },
              {
                "imageUrl": "https://www.linkpicture.com/q/52637328_2294347244178322_466564221509828608_n.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "ช่างชุ่ย"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/826131804850487376/jam.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "The jam factory"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.lhong1919 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/826133976971608154/lhong.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `                   🐉 ล้ง 1919 🐉
☛ จากอดีตท่าเรือกลไฟ กลายเป็น สถานที่ศึกษาประวัติศาสตร์ไทยจีนชั้นเยี่ยม ในชื่อ “ล้ง 1919”
☞ ที่เที่ยวแนว Heritage แห่งนี้ มีทั้งอาคารสถาปัตยกรรมจีนโบราณ ภาพวาดตามผนังของตึก ลวดลายสุดคลาสสิคบนกรอบประตูและหน้าต่าง `,
        },
        {
          "type": "text", // ①
          "text": `☞ ศาลเจ้าแม่หม่าโจว้ โคมไฟสีแดงที่ห้อยประดับอยู่โดยรอบ โกดังสังกะสีสุดเท่ รับรองว่าได้รูปสวยๆ กลับไปแน่นอน`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ถนนเชียงใหม่ แขวงคลองสาน เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: ศาลเจ้าแม่หม่าโจ้ว เปิดวันจันทร์ เวลา 11:00 – 20:00 น. และวันอังคาร – วันอาทิตย์ เวลา 09.00–20.00 น.
• โซน Art&Craft Shop เปิดทุกวันเวลา 10.00 – 20.00 น.
• โซน Eatery Zone เปิดทุกวันเวลา 10.00 -22.00 น.
📞 Phone: 091 187 1919
👍 Facebook: www.facebook.com/lhong1919`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตที่อื่น",
                  "text": "กลับไปดูหน้ารวมสตรีทอาร์ตย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.changChui = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/831920093163421706/f4f46360a1310b33.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `                🎨 ช่างชุ่ย 🎨
☛  สายฮิป สายศิลป์ สายอาร์ท ต้องมารวมตัวกันที่นี่ค่ะ “ช่างชุ่ย” คอมมูนิตี้ มอลล์ ที่เปิดมาในคอนเซ็ปต์ดินแดนแห่งความสร้างสรรค์อันไร้ขีดจำกัด
☞ Unlimited Creativity มีมุมและโซนต่างๆ มากมายให้เสพงานศิลป์เพียบ นอกจากนี้ยังมีร้านค้า ร้านอาหาร บาร์ ให้ได้นั่งแฮงค์เอ้าท์ รวมถึงคาเฟ่สวยๆ ให้ชิล ถ่ายรูปสวยๆ อีกด้วยค่ะ `,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 460/8 ถนนสิรินธร แขวงบางพลัด เขตบางพลัด กรุงเทพฯ
🏷️ Open – Close: 11.00-23.00 น.
📞 Phone: 08-1817-2888
👍 Facebook: www.facebook.com/ChangChuiBKK`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตที่อื่น",
                  "text": "กลับไปดูหน้ารวมสตรีทอาร์ตย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.theJamFactory = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/831923510552690708/jamfac.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `        🖼 The Jam Factory 🖼
☛ โครงการสุดชิคที่มีการปรับปรุงจากโกดังของโรงงานเก่า ให้กลายเป็นแหล่งพักผ่อนของคนเมืองกรุงริมแม่น้ำเจ้าพระยา
☞ เป็นที่ตั้งของร้านกาแฟ ร้านอาหาร บริษัทออกแบบ ร้านค้า ร้านหนังสือ และแกลเลอรี่ของสถาปนิกไทย คุณดวงฤทธิ์ ดวงนาค`,
        },
        {
          "type": "text", // ①
          "text": `☞ สำหรับลานว่างกลางแจ้ง ซึ่งแวดล้อมด้วยต้นไม้ร่มรื่นย์ ไว้จัดงานแสดงดนตรี อีเวนท์ นิทรรศการภาพถ่ายและศิลปะ
☞ อีกทั้งทุกวันเสาร์-อาทิตย์สิ้นเดือน จะมีตลาดนัด The Knack Market ให้เดินช้อปปิ้งกันแบบฮิปๆ เสื้อผ้า กระเป๋า รองเท้า งานแฮนเมด ของสะสม ของวินเทจ ลากยาวตั้งแต่เวลา 16.00-21.00 น.`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 41/1-5 เจริญนคร คลองสาน กรุงเทพฯ
🏷️ Open – Close: ทุกวันเวลา 11.00-23.00 น.
📞 Phone: 0-2861-0950
👍 Facebook: www.facebook.com/TheJamFactoryBangkok`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตที่อื่น",
                  "text": "กลับไปดูหน้ารวมสตรีทอาร์ตย่านธนบุรี"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.thonburiTemple = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://www.tuktukstudio.com/wp-content/uploads/2019/06/Cover_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%96%E0%B9%90%E0%B9%95_0014.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดกัลยาณมิตรวรมหาวิหาร"
                }
              },
              {
                "imageUrl": "https://obs.line-scdn.net/0hct3VRl-jPFsOLxaYZDpDDDR5PzQ9Qy9YahltWFJBYm9xT34KNExwNS0vYjtwTHsFYB50PCwmJ2orS3oEZktw/w644",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดอินทารามวรวิหาร"
                }
              },
              {
                "imageUrl": "https://obs.line-scdn.net/0hvtHxzoA2KVt1AQOYHxRWDE9XKjRGbTpYETd4WClvd28KYWsKT2JlNVYAcmMNNm4FGzBhPFcHMmpQZW8EHWVl/w644",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดขุนจันทร์ ตลาดพลู"
                }
              },
              {
                "imageUrl": "https://watportal.com/th/file/get/file/20190118453e85d56bc732de5b6353c4b9d136ad163730.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดนาคกลางวรวิหาร"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeThonburiOne = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832642432810090546/7aca9ed02dbbee4e.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `  🕯 วัดกัลยาณมิตรวรมหาวิหาร 🕯
☛ วัดกัลยาณมิตรเป็นหนึ่งในวัดเก่าแก่ของไทย ถือว่าเป็นวัดคู่บ้านคู่เมืองของฝั่งธนบุรีหรือเป็นวัดดังฝั่งธนก็คงจะไม่ผิด
☞ โดยภายในพระวิหารหลวงประดิษฐาน “พระพุทธไตรรัตนนายก” หรือ “ซำปอกง” ที่พุทธศาสนิกชนนิยมมาสักการะเพื่อความเป็นสิริมงคล
☞ สถาปัตยกรรมและจิตรกรรมส่วนใหญ่ในวัดแห่งนี้ ผสมผสานระหว่างความเป็นไทยและจีน แสดงถึงความเป็นกัลยาณมิตรระหว่างศาสนา ศิลปวัฒนธรรมของไทยและจีนอย่างชัดเจน`,
        },
        {
          "type": "text", // ①
          "text": `❗️Tip : ตีระฆังใหญ่ที่สุดในประเทศไทย "เด่น ดัง รวย" พูดเจรจาน่าเชื่อถือ และอย่าลืม!! ลอดใต้ระฆังแล้วอธิษฐานจิตให้มั่น`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 371 ซอย อรุณอมรินทร์ 6 เเขวง วัดกัลยาณ์ เขตธนบุรี กรุงเทพมหานคร
🏷️ Open – Close: 06.00-18.00 น.`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปดูหน้ารวมน้ารวมวัดฝั่งธน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeThonburiTwo = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832643991744151552/bf741cee6a6683a7.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832644156555657276/2019011844f3acb3094ed9f45ac3b34692198dcb163822.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `    🕯 วัดนาคกลางวรวิหาร  🕯
☛ เป็นวัดโบราณที่มีมาตั้งแต่สมัยกรุงศรีอยุธยาตอนปลาย ที่มีถาวรวัตถุสำคัญต่าง ๆ อยู่มากมาย
☞ หนึ่งในนั้นคือ "หลวงพ่อโคนสมอมหาลาภ" พระพุทธรูปศักดิ์สิทธิ์ประจำวัด จนทำให้ทุกวันนี้คนทั่วไปที่เข้ามาสักการะหลวงพ่อโคนสมอมหาลาภ
ขอให้ตนแคล้วคลาดจากโรคภัยไข้เจ็บให้หายขาด รวมถึงในเรื่องโชคลาภอีกด้วย`,
        },
        {
          "type": "text", // ①
          "text": `❗️Tip : ไหว้พระโคนสมอมหาลาภ เน้นเรื่องสุขภาพเป็นหลักและทุกๆวันเสาร์ช่วง 9.00 น. จะมีการสวดมนต์บทจักรพรรค์ ภายในศาลาสุธรรมภาวนา (ศาลาพระเจ้าตาก)`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอย อิสรภาพ 42 แขวง วัดอรุณ เขตบางกอกใหญ่ กรุงเทพฯ
🏷️ Open – Close: 06.00-18.00 น.`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปดูหน้ารวมน้ารวมวัดฝั่งธน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeThonburiThree = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832646142768316426/7dd6ee7aab51c001.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `       🕯 วัดอินทารามวรวิหาร 🕯 
☛ วัดอินทารามวรวิหาร เป็นพระอารามหลวงชั้นตรี ชนิดวรวิหาร เป็นวัดที่มีความสำคัญมากในรัชสมัยของสมเด็จพระเจ้ากรุงธนบุรี หรือ พระเจ้าตาก 
☞ และเป็นที่ประดิษฐานพระบรมศพของสมเด็จพระเจ้ากรุงธนบุรี รวมทั้งพระราชอัครมเหสีของพระองค์
☞ แนะนำให้มาวันเสาร์-อาทิตย์ จะมีลูกวัดและจิตอาสาพาชม, เล่าประวัติ, พากราบไหว้ตามสถานที่สำคัญ และพระอุโบสถหลังใหม่จะเปิดให้เข้าชมเฉพาะวันเสาร์, อาทิตย์ค่ะ 
`,
        },
        {
          "type": "text", // ①
          "text": `❗️Tip : ไหว้องค์พระเจ้าตากอันศักดิ์สิทธิ์ ถวายประทัด อธิษฐานแล้วจุดด้านนอก รับรองว่า เฮง ดัง ปัง รวย`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 256 Thoet Thai Rd, แขวง บางยี่เรือ เขตธนบุรี กรุงเทพฯ
🏷️ Open – Close: 06.00-18.00 น.
📞 Phone: 086-991-7658`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปดูหน้ารวมน้ารวมวัดฝั่งธน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeThonburiFour = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/832647481413992448/1d1cc8a3af6bc3a8.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `       🕯 วัดขุนจันทร์ ตลาดพลู 🕯
☛ “วัดขุนจันทร์” หรือชื่อเต็มๆ ว่า “วัดวรามาตยภันฑสาราราม” นั้นถือเป็นวัดเก่าแก่วัดหนึ่งที่อยู่คู่ฝั่งธนและย่านตลาดพลูมาแล้วกว่าร้อยปี 
☞ รูปแบบส่วนใหญ่ของวัดขุนจันทร์จะเป็นการผสมผสานกันระหว่างศิลปะแบบไทยพุทธกับพม่า ภายในวัดประกอบไปด้วยส่วนสำคัญๆ อย่าง “วิหารหลวงพ่อโต”, “วิหารหลวงพ่อหยกขาว”, “วิหารเจ้าแม่กวนอิมเพชรงาม”, “พระพุทธรูปปางไสยาสน์” และ “พระพุทธชินราช”
☞ นอกจากนี้ทางวัดขุนจันทร์ยังมีความโดดเด่นในเรื่องของการสะเดาะเคราะห์ปีชงและบูชาพระราหู โดยจะมีพิธีสวดมนต์นพเคราะห์ราหูที่เปิดโอกาสให้ประชาชนได้เข้าร่วมอยู่เป็นประจำทุกปี 
`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอยเทอดไท 28 แขวงตลาดพลู เขตธนบุรี กรุงเทพฯ
🏷️ Open – Close: ทุกวัน เวลา 07.00 – 18.00 น.
📞 Phone: 02-465-1901`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปดูหน้ารวมน้ารวมวัดฝั่งธน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.travelBangrak = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "อยากไปเที่ยวแนวไหนเลือกได้เลยค่า 📌",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://www.clipartmax.com/png/middle/134-1346093_coffee-takeaway-icon-flat-coffee-icon-png.png",
                "action": {
                  "type": "message",
                  "label": "คาเฟ่นั่งชิล",
                  "text": "คาเฟ่นั่งชิลย่านเจริญกรุง-บางรัก"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://cdn0.iconfinder.com/data/icons/navigation-and-map-1/85/map_location_city_street_pin_marker-512.png",
                "action": {
                  "type": "message",
                  "label": "สตรีทอาร์ต",
                  "text": "สตรีทอาร์ตย่านเจริญกรุง-บางรัก"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://i.dlpng.com/static/png/4744169-apostle-hand-emoji-gesture-hand-together-hands-pray-praying-icon-2-people-praying-png-512_512_preview.png",
                "action": {
                  "type": "message",
                  "label": "วัด",
                  "text": "วัดย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.BangrakCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833718800704733264/homuu.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Homu Cafe"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833719152035758122/thehidenn.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "The Hidden Milkbar"
                }
              },
              {
                "imageUrl": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.6435-9/119205891_953580988462744_2654797974861142429_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=EyW7eEDsxU4AX8B0hM2&_nc_ht=scontent.fbkk12-2.fna&oh=16dd80fa8d4267778fde3580b8131e37&oe=60A4639C",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Sarnies Bangkok"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833719579259043840/fatt.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "The Hidden Milkbar"
                }
              },
             
            ]
          }
        }
      ],
    }),
  });
};

exports.homuCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833712331279695882/homu.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `        🍵 Homu Cafe 🍵 
☛ คาเฟ่ขนมญี่ปุ่นโบราณในย่านเจริญกรุง ที่บรรยากาศทั้งในร้านและรอบตัวร้านเต็มไปด้วยความคลาสสิกวินเทจ
☞ โดยตัวร้านจะมีทั้งหมด 2 ชั้น จะเป็นที่สำหรับนั่งทานขนมทั้งหมด เลือกนั่งได้ตามใจชอบเลย`,
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833712333641220136/homu2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `☞ ในส่วนของเมนูก็มีทั้งเครื่องดื่มร้อน-เย็น รวมถึงขนมญี่ปุ่นหลากหลายเมนูให้ได้เลือกชิมกัน
☞ เมนูแนะนำที่มาถึงแล้วต้องลอง โมจิหยดน้ำ โมจิหยดน้ำสีใส ราดไซรัปน้ำตาล ทานเข้าไปแล้วละมุนลิ้นมากๆ รสชาติหวานกำลังดี`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 32 ซอยเจริญกรุง 44 แขวงบางรัก เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: จันทร์ - อาทิตย์  08.00น. - 18.00 น.
📞 Phone: 0916554796
👍 Facebook: https://www.facebook.com/THEHOMU?_rdc=1&_rdr`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่อื่นๆย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.theHiddenMilkbar = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833713555864944680/65640733_2224640764321726_1619704125203677184_n.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833713488333242428/thehidden.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `      🎨 The Hidden Milkbar 🎨
☛ The Hidden Milkbar ตั้งอยู่บนชั้น 3 ของตึก fotoclub bkk แหล่งรวมสินค้าถูกใจวัยรุ่นที่รักการถ่ายรูป ทำให้บรรยากาศของร้านเต็มไปด้วยสีสันสดใส
☞ มีมุมชิคๆ ไว้ถ่ายรูปเพียบ นอกจากนี้ เจ้าของร้านตั้งใจให้ลูกค้าได้สัมผัสเครื่องดื่ม ขนม และบรรยากาศในสไตล์ออสซี่ พร้อมขนวัตถุดิบและเมนูขึ้นชื่อของประเทศออสเตรเลียมาให้ลิ้มลองอีกด้วย `,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 1158 ถนนเจริญกรุง แขวงบางรัก เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: วันพุธ - อาทิตย์ เวลา 11.00 - 18.00 น.
📞 Phone: ไม่ระบุ
👍 Facebook: www.facebook.com/thehiddenmilkbar/`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่อื่นๆย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.sarniesBangkok = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833715817161293834/san.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833715819355439154/san2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `        🍵 Sarnies Bangkok 🍵 
☛ Sarnies Bangkok เป็นร้านกาแฟจากสิงคโปร์แต่เปิดในไทยมาได้สักพัก ตอนแรกทางร้านเน้นให้บริการกาแฟ และจำหน่ายเมล็ดกาแฟเป็นหลัก
☞ จากนั้นก็ได้ปรับในส่วนของเมนูให้มีความหลากหลายมากยิ่งขึ้น มีทั้งกาแฟ ชา โกโก้และเครื่องดื่มสไตล์ mocktail`,
        },
        {
          "type": "text", // ①
          "text": `☞ มีอาหารแบบ all day brunch ทั้งคาวและหวานจนกลายเป็นคาเฟ่อย่างเต็มรูปแบบ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: Sarnies ซอยเจริญกรุง 44 BTS สะพานตากสิน เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: 9.00 - 18.00 น.
📞 Phone: 0-2102-9407
👍 Facebook: www.facebook.com/sarnies.bkk`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่อื่นๆย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.fatsAndAngryCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/833716553588539422/fat.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `         🎨 Fats & Angry Cafe 🎨
☛ เราจะพาทุกคนไปรู้จักกับร้าน Fats and Angry คาเฟ่เปิดใหม่ล่าสุด ย่านเจริญกรุง บางรัก เป็นคาเฟ่ที่ถูกใจวัยรุ่นยุค 90s แน่นอน
☞ ตัวร้านน่ารักมาก Mood & Tone ตกแต่งออกมาเป็น อเมริกันสไตล์ อาหารและเครื่องดื่มในร้านก็จะเป็นฟีลเดียวกับตัวร้าน 
เน้นไปที่เมนู เบอร์เกอร์ เฟรนช์ฟรายด์ กินคู่โคล่าคือเข้ากั๊ยเข้ากัน และเมนูเด็ด ที่ต้องห้ามพลาดคือ Milkshake ที่บอกเลยว่าดีงามมาก`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอยเจริญกรุง 46 แขวง/เขต บางรัก กรุงเทพฯ
🏷️ Open – Close: 10.30 - 21.00 น.
📞 Phone: 09-7238-0935
👍 Facebook: www.facebook.com/fatsandangry/`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูคาเฟ่อื่นๆ",
                  "text": "กลับไปดูคาเฟ่อื่นๆย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.BangrakStreetArt = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834378189706756116/warehouse.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Warehouse 30"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834378220404342794/taladnoi.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "ตลาดน้อย"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834378264973541406/streetArt.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Street art ย่านเจริญกรุง"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.wareHouse30 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834381048359026699/warehouse_1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834381054089494558/warehouse_2.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `      🎨 Warehouse 30 🎨
☛ คอมมูนิตี้เปิดใหม่สุดฮิปในย่านเจริญกรุง ที่เนรมิตโกดังเก่าสมัยสงครามโลกครั้งที่ 2 ให้กลายเป็นพื้นที่ที่รวบรวมทั้งงานศิลปะ ไอเดียความคิดสร้างสรรค์ และไลฟ์สไตล์ของคนเมืองยุคใหม่
☞ ผสมเข้ากับ Story และความมีเสน่ห์ของย่านเจริญกรุง ช่วยพลิกโฉมให้ย่านนี้กลับมามีชีวิตชีวาอีกครั้ง ภายในโครงการ Warehouse 30 มีร้านอาหารและคาเฟ่ให้เลือกหลากหลายร้าน`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 48 ซอยกัปตันบุช เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: เปิดทุกวัน เวลา 11:00–20:00 น.
📞 Phone: 02 237 5087
👍 Facebook: www.facebook.com/Warehouse30BKK/`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตอื่นๆ",
                  "text": "กลับไปหน้ารวมสตรีทอาร์ตย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.taladNoi = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://f.ptcdn.info/398/060/000/pgyfhcs16Bhfo74UA39-o.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `               🍵 ตลาดน้อย 🍵 
☛ อีกหนึ่งย่านแสนมีเสน่ห์ในกรุงเทพ ที่เต็มไปด้วยสถาปัตยกรรมเก่าแก่ร้านอาหารอร่อยๆมากมายที่สืบทอดมาจากรุ่นสู่รุ่นหลายต่อหลายร้านเลยค่ะ
☞ แถมในปัจจุบันนี้ ตามกำแพงบ้านเก่ายังเต็มไปด้วยสตรีทอาร์ตลวดลายเก๋ไก๋ให้เราเดินถ่ายรูปสนุกกับการโพสต์ท่าทางต่างๆได้ตลอดทั้งย่านอีกด้วย
เรียกได้ว่าเข้าซอยนั้นออกซอยนี้เลินสุดๆ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: แขวงตลาดน้อย เขตสัมพันธวงศ์ กรุงเทพฯ
🏷️ Open – Close: ไม่ระบุ
📞 Phone: ไม่ระบุ
👍 Facebook: ไม่ระบุ`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตอื่นๆ",
                  "text": "กลับไปหน้ารวมสตรีทอาร์ตย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.streetArtCharoenkrung = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834384545213579284/streetArt_1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `   🎨 Street Art ย่านเจริญกรุง 🎨
☛ จากกำแพงเก่าๆ ผุผัง ดูแล้วไม่น่าสนใจ… เมื่อถูกจรดปลายพู่กันถ่ายทอดเรื่องราวลงบนผนังกลับกลายเป็น “สตรีทอาร์ต” ที่แสดงผลงานศิลปะสุดเจ๋งใจกลางกรุง!!
☞ ย่านนี้เรียกได้ว่า มีสตีทอาร์ตเยอะมากๆ ช่วงเจริญกรุง 32 จุดนี้เป็นจุดใหญ่จะมีภาพเยอะมากเรียกว่าทั้งซอย
☞ เดินเข้าซอยมาจะเห็นงานศิลปะที่กำแพง แต่ละรูปก็สวยๆทั้งนั้น ซอยนี้จะมีคนเข้ามาถ่ายรูป มีรถเข้า-ออก ตลอด`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ซอยเจริญกรุง 32 เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: เปิด 24 ชั่วโมง
📞 Phone: ไม่ระบุ
👍 Facebook: ไม่ระบุ`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปดูสตรีทอาร์ตอื่นๆ",
                  "text": "กลับไปหน้ารวมสตรีทอาร์ตย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeCharoenkrung = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834446145744273468/temple_One.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดศาลเจ้าเจ็ด"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834446150337036340/temple_Two.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดแขกสีลม"
                }
              },
              {
                "imageUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834446148474372096/temple_Three.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "โบสถ์กาลหว่าร์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeCharoenkrung_1 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://www.touronthai.com/uploads/2018-09/1537064288.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `    🏮 วัดศาลเจ้าเจ็ด (ซิกเซียม่า) 🏮 
☛ ศาลเจ้าเก่าแก่ที่ช่วยปกปักรักษาชาวจีนที่อพยพมาอยู่เมืองไทยมานานกว่า 100 ปีแล้ว ศาลเจ้าแห่งนี้สร้างขึ้นตั้งแต่ พ.ศ. 2425
☞ ภายในมีรูปปั้นเจ้าแม่หรืออาม่า ผู้เป็นที่มาของชื่อศาลเจ้าในภาษาจีน ทำจากเซรามิก ไม้สัก และบรอนซ์ รวมทั้งเทพเจ้าที่ผู้คนพากันนับถือ ไม่ว่าจะเป็นพระอวโลกิเตศวรโพธิสัตว์ เจ้าแม่กวนอิม`,
        },
        {
          "type": "text", // ①
          "text": `☞ ใครที่ไม่ชอบเบียดเสียดกับผู้คนน่าจะชอบที่นี่ เพราะคนไม่พลุกพล่าน มีความเป็นส่วนตัว สามารถใช้เวลาสักการะและขอพรเทพเจ้าได้อย่างสบาย ๆ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 27 ซอยเจริญกรุง39 ถนนเจริญกรุง แขวงสี่พระยา เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: 06.00-18.00 น.
🚶 การเดินทาง: ตรงเข้ามาจากปากซอยเจริญกรุง 39 ประมาณ 100 เมตร อยู่ทางซ้ายมือ ก่อนถึงร้านอาหารญี่ปุ่นฮานาย่า`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeCharoenkrung_2 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834448283795456010/temple_Two_1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `            🙏 วัดแขกสีลม 🙏
☛ ที่นี่เป็นศูนย์รวมจิตใจของชาวอินเดียที่อาศัยอยู่ในกรุงเทพฯ มีความเก่าแก่ถึง 107 ปี ภายในเป็นที่ประดิษฐานของเทวรูปในศาสนาฮินดู
☞ ใครอยากมาชมพิธีแห่เทพเจ้าฮินดูที่จัดอยู่ตลอดปีก็ได้ หรือหากต้องการสักการะพระแม่ลักษมี ให้นำดอกบัวพับกลีบ พร้อมแบงก์ยี่สิบไปถวายเพื่อความเป็นสิริมงคล`,
        },
        {
          "type": "text", // ①
          "text": `☞  หรือถ้าอยากขอเนื้อคู่ให้ใช้พวงมาลัยกุหลาบไหว้พระแม่อุมาเทวี 
❗ อย่าลืมว่าต้องถอดรองเท้าด้านหน้าวัดก่อนเข้าสักการะ และห้ามถ่ายรูปภายในวัดเด็ดขาด`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 2 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: วันจันทร์-พฤหัสบดี เปิด 06.00-20.00 น. วันศุกร์เปิด 06.00-21.00 น. วันเสาร์-อาทิตย์ เปิด 06.00-20.30 น.
🚶 การเดินทาง: จากสถานีรถไฟฟ้า BTS สะพานตากสิน เดินเข้ามาที่ถนนสีลม ตรงผ่านโรงแรมฮอลิเดย์ อินน์ ประมาณ 3-5 นาที`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.templeCharoenkrung_3 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/834448259278831626/temple_Three_1.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `           🖼 โบสถ์กาลหว่าร์ 🖼
☛ โบสถ์คริสต์นิกายโรมันคาทอลิก ในรูปแบบสถาปัตยกรรมโกธิคที่มีความเก่าแก่ถึง 120 ปี สวยจนกลายเป็นจุดหมายหนึ่งในการถ่ายรูป
☞ ภายในโบสถ์มีพระแท่นบูชาหินอ่อนแกะสลัก รอบ ๆ ประดับประดาไปด้วยกระจกหลากสีสัน บอกเล่าเรื่องราวเกี่ยวกับพระธรรมล้ำลึกทั้ง 3 ประการ ของการสวดลูกประคำ`,
        },
        {
          "type": "text", // ①
          "text": `☞  สามารถมาเข้าร่วมพิธีมิสซาได้ในวันอาทิตย์ เวลา 08.00 และ 19.30 น. หรือวันจันทร์-เสาร์ เวลา 19.30 น. เพื่อชำระร่างกายและจิตใจให้บริสุทธิ์ตั้งแต่ต้นปี`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 1318 ถนนเจริญกรุง แขวงตลาดน้อย เขตสัมพันธวงศ์ กรุงเทพฯ
🏷️ Open – Close: 08.00 -20.00 น.
🚶 การเดินทาง: จาก BTS สะพานตากสิน ขึ้นรถเมล์สาย 1 ลงป้ายสำนักงานเขตสัมพันธวงศ์ เดินย้อนมาเข้าซอยทางด้านซ้ายมือจนสุดซอย`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญกรุง-บางรัก"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.travelCUSS = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "อยากไปเที่ยวแนวไหนเลือกได้เลยค่า 📌",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://www.clipartmax.com/png/middle/134-1346093_coffee-takeaway-icon-flat-coffee-icon-png.png",
                "action": {
                  "type": "message",
                  "label": "คาเฟ่นั่งชิล",
                  "text": "คาเฟ่นั่งชิลย่านจุฬา-สยาม-สามย่าน"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834410816207585290/024-museum.png",
                "action": {
                  "type": "message",
                  "label": "พิพิธภัณฑ์",
                  "text": "พิพิธภัณฑ์ย่านจุฬา-สยาม-สามย่าน"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834410863803760691/033-temple.png",
                "action": {
                  "type": "message",
                  "label": "วัด",
                  "text": "วัดย่านจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.cussCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834730072321687582/little_tulip.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Little tulip cafe"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834735592582545420/chufang.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Chufang"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834738163640565790/sonbrown.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Sonbrown Cafe"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834740510567432232/labyrinth.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Labyrinth Cafe"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/834743641058574336/sawol.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "Sawol Cafe"
                }
              }
            ]
          }
        }
      ],
    }),
  });
};

exports.Littletulip = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/834754197399273513/little_tulip_5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🌷 Little tulip cafe 🌷
👉 Little tulip cafe คาเฟ่ขนาดกะทัดรัดในซอยจุฬา 5 ที่เมื่อเดินมาก็จะเห็นความน่ารักของคาเฟ่นี้มาแต่ไกลเลย...ตัวร้านตกแต่งแบบเกาหลีตั้งแต่หน้าร้านเลยค่ะ ทั้งดอกทิวลิปริมกำแพง ชุดโต๊ะ-เก้าอี้ และการเล่นสีของประตูและกำแพงที่ตัดกันอย่างลงตัว พอเข้ามาภายในร้านก็บอกเลยว่าน่ารักไม่แพ้ด้านนอกเลย ภายในก็ตกแต่งเรียบๆ เช่นเดียวกัน ประดับตกแต่งด้วยดอกทิวลิปหลากหลายสีสัน ภ่ายมุมไหนก็สวยไปหมด 
👉 สำหรับเมนูก็มีเครื่องดื่ม และวาฟเฟิลสอดไส้ต่างๆ ค่ะ แต่ถ้ามาในช่วงเทศกาลก็จะมีเมนูพิเศษจากทางร้านด้วยนะ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 117 จุฬา5 สวนหลวงสแควร์ แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: 11.00-20.00 น.
📞 Phone: -
🔗 Facebook: www.facebook.com/littletulipcafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังคาเฟ่อื่นๆ",
                  "text": "กลับไปยังหน้ารวมคาเฟ่ย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.Chufang = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/834756740037214218/chufang_5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🉐 Chufang ฉูฝาง 🉐 
👉 อีกหนึ่งคาเฟ่ในโครงการดราก้อนทาวน์ Chufang คาเฟ่ขนาดกะทัดรัดสไตล์จีนที่เป็นสถานที่ถ่ายเอ็มวีเพลงอยากเริ่มต้นใหม่กับคนเดิมของอิ้งค์ วรันธร ภายในตกแต่งแบบจีนเลยค่ะ ทั้งกำแพง พื้นกระเบื้องลายจีน ของประดับตกแต่ง เก้าอี้ และโซนที่นั่งที่ภายในจะเป็นบาร์เหมือนนั่งอยู่ในคาเฟ่ย้อนยุคของประเทศจีน
👉 เมนูของที่นี่จะมีเครื่องดื่มที่จะเน้นเป็นชา ส่วนเมนูอาหารก็จะมีเมนูแนะนำอย่างตัน ตัน เมี่ยน (ก๋วยเตี๋ยวสไตล์จีน)
และเกี๊ยวซ่าให้เราได้ลองสั่งมาทานกันค่ะ เป็นอีกหนึ่งคาเฟ่ที่อยากให้มาลองจริงๆ นะ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 188/26 โครงการดราก้อนทาวน์ ซอย แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: 11.00-20.00 น. (หยุดทุกวันอังคาร)
📞 Phone: 094 447 9963
🔗 Facebook: www.facebook.com/chufangbkk`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังคาเฟ่อื่นๆ",
                  "text": "กลับไปยังหน้ารวมคาเฟ่ย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.Sonbrown = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/835232034648489994/sonbrown_5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🐻 Sonbrown Cafe 🐻
👉 Sonbrown Cafe ออกแบบมาในสไตล์ลอฟท์ปูนเปลือยที่ผสมผสานความเป็นจีนได้อย่างลงตัว แต่ไฮไลท์ของที่นี่นอกจากเครื่องดื่ม-ขนมจะอร่อยแล้ว ยังมีซุ้มประตูโค้งด้านหน้าที่เป็นจุดถ่ายรูปยอดฮิตที่ใครมาแล้วต้องไปถ่ายด้วยนะ มุมนี้ดีจริงจริ๊ง
👉 เมนูก็จะมีทั้งเครื่องดื่มร้อน-เย็นและเบเกอรี่เลยค่ะ สั่งมาแล้วก็สามารถนั่งทานในร้าน ห้องแอร์เย็นๆ หรือจะออกมานั่งจิบกาแฟ ทานขนมที่โต๊ะเก้าอี้ด้านนอกก็ได้ค่ะ ชิลๆ สบายๆ `,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 188 44 ซอย แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร  (ชั้น2 ของโครงการดราก้อนทาวน์ จุฬาซอย16)
🏷️ Open – Close: วันจันทร์-ศุกร์ 10.00-17.00 น. / วันเสาร์-อาทิตย์ 10.00-18.00 น.
📞 Phone: 088-6751760
🔗 Facebook: www.facebook.com/sonbrowncafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังคาเฟ่อื่นๆ",
                  "text": "กลับไปยังหน้ารวมคาเฟ่ย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.Labyrinth = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/834759294431133756/labyrinth_5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🔲 Labyrinth Cafe 🔲
👉 Labyrinth Cafe (แล็บลิ้นน คาเฟ่) คาเฟ่โทนสีดำ สไตล์ดาร์กๆ ที่สายคาเฟ่และสายอาร์ตต้องชอบ เพราะร้านนี้ด้านล่างชั้น1 จะเป็นเคาว์เตอร์บาร์กาแฟแบบ Slow Bar ที่มีเก้าอี้บาร์ให้เราได้นั่งรอระหว่างรอกาแฟ เราก็จะได้เห็นขั้นตอนการทำกาแฟทั้งหมด
👉 ส่วนชั้น 2 จะเป็นโซนของ Exhibition ที่มีผลงานศิลปะ งานอาร์ตให้เราได้ชมกัน โดยในแต่ละช่วงจะสลับสับเปลี่ยนกันไปค่ะซึ่งเครื่องดื่มกาแฟของที่นี่จะมีให้เลือกหลากหลายเมนูเลย มาลองกันได้ค่า`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 1527 ถนนพระรามที่ ๔ แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: พฤ-อา 11.00-17.00 น.
📞 Phone: 099 145 9563
🔗 Facebook: www.facebook.com/labyrinthcafebkk`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังคาเฟ่อื่นๆ",
                  "text": "กลับไปยังหน้ารวมคาเฟ่ย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.SawolCafe = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/767336648672673797/834760638059774042/sawol_5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🍰 Sawol cafe 🫖
👉 อีกหนึ่งคาเฟ่สไตล์เกาหลี Sawol Cafe ที่ตั้งอยู่ในซอยขุนนาวา เป็นคาเฟ่ขนาดเล็กกะทัดรักสไตล์มินิมอลเกาหลีที่ตัวร้านจะใช้โทนสีครีมและสีไม้อ่อนเป็นหลัก เมื่อเข้ามาภายในก็รู้สึกสบายตา อบอุ่น ให้ฟิลแบบนี่ฉันอยู่คาเฟ่ในประเทศเกาหลีรึเปล่าเนี้ย!เพราะภายในตกแต่งเรียบง่ายใช้เฟอร์นิเจอร์ขาว โทนสีขาว-ครีมเป็นหลักค่ะ ประดับตกแต่งด้วยของจุกจิกน่ารักไม่ว่าจะเป็นดอกไม้ กรอบรูป กระจก สามารถนำเอามาเป็นพร็อพถ่ายรูปได้เลย...
👉 ในส่วนของเมนูก็มีเครื่องดื่มและเมนูเบเกอรี่ขนมเค้กน่ารักๆมากมายให้เลือกชิมเลย`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 3 ซอย ขุนนาวา แขวงมหาพฤฒาราม เขตบางรัก กรุงเทพมหานคร
🏷️ Open – Close: ทุกวัน 10.00-18.00 น. (ปิดวันจันทร์)
📞 Phone: 090 887 8935
🔗 Facebook: www.facebook.com/sawolcafe`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังคาเฟ่อื่นๆ",
                  "text": "กลับไปยังหน้ารวมคาเฟ่ย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.cussTemple = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า ☕️",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835124195608363018/hualampong.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดหัวลำโพง"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835109991760789514/chaomae.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "ศาลเจ้าแม่ทับทิมสะพานเหลือง"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835111474853707796/chaopho.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "ศาลเจ้าพ่อเสือสามย่าน"
                }
              },
              {
                "imageUrl": "https://www.lovethailand.org/images/banner/content/lovethailand_banner_20122909224508.jpg",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "วัดปทุมวนารามราชวรวิหาร"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.WatHualampong = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cms.dmpcdn.com/travel/2019/06/18/0c9b16e8-0cc0-488e-93a5-283082a45d84_original.jpg?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🙏 วัดหัวลำโพง 🙏
👉 นอกจากจะเป็นวัดที่มีความเก่าแก่ เพราะสันนิฐานกันว่าสร้างขึ้นตั้งแต่สมัยต้นกรุงรัตนโกสินทร์ ประมาณรัชกาลที่ 1 ถึงรัชกาลที่ 3  วัดหัวลำโพงยังเป็นอีกหนึ่งสถานที่ที่คนไทยนิยมเดินทางมาทำบุญ เพราะสามารถทำบุญได้ตลอด 24 ชั่วโมง นอกจากจะมีให้ทำบุญตักบาตร ถวานสังฆทานตามแบบวัฒนธรรมไทยแล้ว ยังมีให้ทำบุญในรูปแบบของการบริจาคโลงศพให้ศพไม่มีญาติ และศาลเจ้าให้ได้ไหว้ขอพรในด้านต่างๆอีกด้วย
👍 ทำบุญได้ตลอด 24 ชั่วโมง
👌 ขั้นตอนการบริจาคโลงศพ
    1.เขียนชื่อ-สกุล ในกระดาษสีชมพู
    2.บริจาคตามจิตศรัทธา….แต่ถ้าทำครบชุดราคา 500 บาท (มีโลงศพ-ผ้าขาว)
    3.จุดธูปไหว้ที่ศาล 20 ดอก
    4.เผาใบเสร็จ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 728 ถนนพระราม 4 แขวงสี่พระยา เขตบางรัก กรุงเทพฯ
🏷️ Open – Close: ทุกวัน
📞 Phone: 0 2233 8109`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.WatPathum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/835106504415379487/pathum5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🙏 วัดปทุมวนารามราชวรวิหาร 🙏
👉 วัดกลางเมืองบนดินแดนสงบและงดงามท่ามกลางป่าคอนกรีต ตั้งอยู่ระหว่างศูนย์การค้าสยามพารากอนและห้างเซ็ลทรัลเวิร์ด เป็นวัดที่ยังคงความสงบ น่าเข้าไปสัมผัสยิ่งนัก ภายในมีพระสายน์ หรือ พระไส ประดิษฐานภายในพระอุโบสถ 
👍 นอกจากนี้ วัดปทุมวนารามยังมีส่วนที่ใช้ในการปฏิบัติธรรมเรียกว่า “สวนป่าพระราชศรัทธา” 🌳 บรรยากาศร่มรื่น เต็มไปด้วยต้นไม้นานาชนิด พอได้เข้าไปสัมผัส สวนป่าพระราชศรัทธา แล้วทำให้จิตใจสงบร่มเย็น เหมาะแก่การปฏิบัติธรรมเป็นอย่างมาก  วัดปทุมวนารามใจกลางเมืองแห่งนี้นับว่า “เป็นดินแดนสงบ อันงดงาม ท่ามกลางป่าคอนกรีต”`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 969 ถนนพระราม1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: ทุกวัน 08.00 - 17.00 น.
📞 Phone: 02 256 6469, 02 251 6478`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.ChaomaeShrine = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/835109994860380220/chaomae5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          ⛩️ ศาลเจ้าแม่ทับทิมสะพานเหลือง ⛩️
👉 เป็นอีกหนึ่งสถานที่ศักดิ์ที่หลายคนนิยมเดินทางไปไหว้ขอพร โดยเฉพาะคนในชุมชนสามย่านและใกล้เคียง  รวมไปถึงนิสิตนักศึกษาจุฬาลงกรณ์มหาวิทยาลัย  
👍 สำหรับพรที่หลายคนนิยมเดินทางไปขอส่วนใหญจะเป็นเรื่องการเรียน  การงาน และโชคลาภ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 377, 11 ซอย จุฬาลงกรณ์ 9 แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: ทุกวัน 08.00-18.30 น.
📞 Phone: 062 875 5884`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.ChaophoShrine = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/835111480621662268/chaopho5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          ⛩️  ศาลเจ้าพ่อเสือสามย่าน  ⛩️
👉 ศาลเจ้าเก่าแก่อันเป็นทึ่เคารพศรัทธาของชาวไทยเชื้อสายจีนแถบสามย่าน-สะพานเหลือง-พระรามสี่ มายาวนาน ภายในศาลประดิษฐานเทพเหี่ยงเทียนเสี่ยงตี่(ตั่วเหล่าเอี๊ย)เป็นองค์ประธาน รวมทั้งเทพเจ้าซึ่งเป็นที่เคารพศรัทธาของชาวไทยเชื้อสายจีนอื่นๆอีกหลายพระองค์
👍 สำหรับพรส่วนใหญ่ที่คนส่วนใหญ่จะแวะไปขอกันจะเป็นในเรื่องของธุรกิจ ขอพรในเรื่องการงานให้ประสบความสำเร็จ เสริมอำนาจบารมีให้ร่ำรวยเงินทอง`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 244 ซอย จุฬาลงกรณ์ 50 แขวง วังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: ทุกวัน 10.00-18.00 น.
📞 Phone: -`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมวัดอื่นๆ",
                  "text": "กลับไปยังหน้ารวมวัดย่านเจริญจุฬา-สยาม-สามย่าน"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.cussMuseum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "กดเพื่อดูรายละเอียดเพิ่มเติมเเต่ละสถานที่ได้เลยค่า 📸",
        },
        {
          "type": "template",
          "altText": "this is an image carousel template",
          "template": {
            "type": "image_carousel",
            "columns": [
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835117538022653972/bacc.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835119799990091786/madame.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "พิพิธภัณฑ์หุ่นขี้ผึ้ง มาดามทุสโซ กรุงเทพ"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835121860689526794/patpong.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "พิพิธภัณฑ์พัฒน์พงศ์"
                }
              },
              {
                "imageUrl": "https://media.discordapp.net/attachments/767336648672673797/835115598655782963/human.png",
                "action": {
                  "type": "message",
                  "label": "อ่านต่อ",
                  "text": "พิพิธภัณฑ์ร่างกายมนุษย์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.HumanMuseum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/835228297817620508/human.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `        🦴 พิพิธภัณฑ์ร่างกายมนุษย์ 🫀
👉 เป็น 1 ใน 11 พิพิธภัณฑ์ของโลกและเป็นพิพิธภัณฑ์แห่งแรกของเอเชียตะวันออกเฉียงใต้ ที่จัดแสดงร่างกายมนุษย์ด้วยเทคนิคพลาสติเนชัน ซึ่งเป็นเทคนิคใหม่ในการรักษาสภาพร่างกายหรือชิ้นส่วนอวัยวะของมนุษย์ที่เสียชีวิต โดยใช้การแทนที่น้ำและไขมันในเนื้อเยื่อด้วยสารพลาสติกเหลว ทำให้ไม่มีกลิ่นเหม็นของน้ำยา ไม่มีการเน่าสลาย และสามารถคงสภาพอยู่ได้นาน `,
        },
        {
          "type": `text`,
          "text": `👍 ภายในจัดแสดงร่างกายและชิ้นส่วนของมนุษย์แบบ 3 มิติ ประกอบด้วย ร่างกายมนุษย์แบบเต็มร่าง 13 ชุด ชิ้นส่วนอวัยวะภายใน 50 ชิ้น ชิ้นส่วนอวัยวะ 27 ชิ้น ชิ้นส่วนกล้ามเนื้อ 23 ชิ้น ร่างกายมนุษย์ตัดแบ่งย่อย 6 ชุด ชิ้นหล่อแสดงระบบหลอดเลือด 5 ชิ้น และร่างกายทารกในครรภ์ 7 ชุด`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: อาคารทันตแพทยศาสตร์เฉลิมนวมราช 80 ชั้น 9 คณะทันตแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: วันจันทร์-ศุกร์ เวลา 10.00-16.00 น.
📞 Phone: 0 2218 8635
💰 Entrance fee: รับบริจาคผ่านกล่องรับบริจาคในพิพิธภัณฑ์`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมพิพิธภัณฑ์",
                  "text": "กลับไปยังหน้ารวมพิพิธภัณฑ์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.baccMuseum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/835228760981897246/bacc5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🎨 หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร 🖼️
👉 เกิดจากความเห็นพ้องจากภาครัฐโดยเฉพาะกรุงเทพมหานคร ภาคประชาสังคม เครือข่ายคนทำงานศิลป์และองค์กรทางศิลปวัฒนธรรม ที่ต้องการมีสถานที่ที่เป็นศูนย์กลางทางศิลปวัฒนธรรม รวบรวมและเป็นแหล่งเรียนรู้ทางศิลปวัฒนธรรมในทุกแขนงสาขา หรือกล่าวได้ว่าหอศิลปฯ เป็นที่เติมเต็มแห่งสุนทรียะของเมืองกรุงเทพมหานคร
👍 การจัดแสดงนิทรรศการ เน้นไปที่การจัดแสดงนิทรรศการหมุนเวียนตามผลงานของศิลปินแขนงต่างๆ และร่วมกับองค์กรทางศิลปะนานาประเทศ นอกจากนั้นยังมีกิจกรรมด้านศิลปะอันหลากหลาย ไม่ว่าจะเป็นดนตรี กวี ละคร ภาพยนตร์ เสวนา และวรรณกรรม เพื่อเป็นการเปิดโลกทัศน์ใหม่ในการเรียนรู้ นำไปสู่ความเจริญ ทางปัญญา สุขภาพทางใจ และการพัฒนาศักยภาพการเรียนรู้ด้านอื่นๆ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: 939 ถนนพระราม 1 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: วันอังคาร - วันอาทิตย์ เวลา 10.00 - 21.00 น.
(หยุดทุกวันจันทร์ และช่วงหยุดปีใหม่ และ ช่วงสงกรานต์)
📞 Phone: 02-214-6630-8
🔗 Website: http://www.bacc.or.th/
💰 Entrance fee: ไม่เสียค่าใช้จ่าย
ยกเว้นการจัดกิจกรรมและการแสดงเป็นกรณีพิเศษ`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมพิพิธภัณฑ์",
                  "text": "กลับไปยังหน้ารวมพิพิธภัณฑ์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.MadameMuseum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/835119821057294356/madame5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          💂 พิพิธภัณฑ์หุ่นขี้ผึ้ง มาดามทุสโซ กรุงเทพ 👩‍🎤
👉 หุ่นขี้ผึ้งผูกพันกับวิถีชีวิตของคนทั่วโลก รวมทั้งคนไทย ผ่านความบันเทิงรูปแบบภาพยนตร์ - - ยังจำโมเม้นต์กระตุกขวัญลุ้นระทึกไปกับภาพยนตร์ฮอลลีวู้ด House of Wax บ้านหุ่นผี ที่กลุ่มวัยรุ่นหลงเข้าไปในเมืองแปลก เจอบ้านหุ่นขี้ผึ้งที่ปั้นมาจากคนที่ยังมีชีวิตอยู่ได้ไหม หรือละครไทยเรื่องห้องหุ่น ที่มีวิญญาณสิงอยู่...วันนี้ ประสบการณ์หุ่นขี้ผึ้งจะกลับมาอีกครั้ง แต่มาในรูปแบบความสนุกล้ำ ไม่ซ้ำใคร!
👌 ภายในจะแบ่งออกเป็นหลายโซน ไม่ว่าจะเป็น Leader of the World, บุคคลที่มีอัจฉริยะภาพ, นักกีฬาระดับโลก, นักร้องระดับท็อปของโลก, โซนซูเปอร์ฮีโร่, โซน Bollywood, โซน A List Party หุ่นทุกตัวจะมีข้อมูลประวัติบอกว่าเป็นใครมาจากไหน และยังมีพวกเกมส์ Interactive  เข้ากับโซนต่างๆ ด้วย นอกจากนี้ยังมีมีกิจกรรมหล่อมือขี้ผึ้งอีกด้วย`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: ชั้น 4 Siam Discovery 989 ถนนพระราม 1 ปทุมวัน กรุงเทพมหานคร
🏷️ Open – Close: ทุกวัน 10.00-19.00 น. (รับชมรอบสุดท้ายเวลา 18.00 น.)
📞 Phone: 0 2658 0060
🔗 Website: www.madametussauds.com/bangkok/
💰 Entrance fee: ผู้ใหญ่ (11 ปีขึ้นไป) ฿590 ราคาออนไลน์ ฿470
เด็ก (3-11 ปี) ฿490 ราคาออนไลน์ ฿390`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมพิพิธภัณฑ์",
                  "text": "กลับไปยังหน้ารวมพิพิธภัณฑ์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.PatpongMuseum = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "imagemap",
          "baseUrl": "https://media.discordapp.net/attachments/767336648672673797/835121859703210024/patpong5.png?_ignored=",
          "altText": "This is an imagemap",
          "baseSize": {
            "width": 1040,
            "height": 1040
          },
          "actions": []
        },
        {
          "type": "text", // ①
          "text": `          🔞 พิพิธภัณฑ์พัฒน์พงศ์ ㊙️
👉 พัฒน์พงษ์เป็นมากกว่าบาร์อะโกโก้ หรือแหล่งช้อปปิ้ง เชิญมาชมประวัติความเป็นมาของเอเชียตะวันออกเฉียงใต้ผ่านถนนพัฒน์พงษ์และค้นหาว่า หน่วยสืบราชการลับของอเมริกา (ทหารอเมริกัน CIA) มาทำอะไรที่นั่น หรือ ทำไม เดวิด โบวี่ ถึงรักที่นี่ เชิญมาสัมผัสประสบการณ์ของพิพิธภัณฑ์สำหรับผู้ใหญ่ (18+) ได้แล้วตอนนี้
👍 ในพิพิธภัณฑ์พัฒน์พงศ์ มีอะไรให้ดูบ้าง?
▫️ จุดเริ่มต้นของ “โคมเขียว” และ “Sex Worker” ในประเทศไทย
▫️ กฎหมายเกี่ยวกับธุรกิจ Sex Worker ตั้งแต่อดีตจนถึงปัจจุบัน
▫️ ฐานบัญชาการลับของ CIA ที่เคยตั้งอยู่ในพัฒน์พงศ์
▫️ บาร์อะโกโก้แห่งแรกในประเทศไทย
▫️ ย่านสถานบันเทิงยามค่ำคืนแห่งแรก ๆ ในประเทศไทย
▫️ เรื่องราวของ “ปิงปองโชว์” นอกจากการยิงลูกปิงปองแล้ว ยังมีโชว์อื่นๆอีกมากมาย เช่น เปิดขวดเป่าเทียน เขียนหนังสือ ฯลฯ`,
        },
        {
          "type": "text", // ①
          "text": `📍 Location: อาคาร 5 ชั้น 2 ถ.พัฒน์พงศ์ 2 แขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ (ตรงข้ามฟู้ดแลนด์)
🏷️ Open – Close: วันเสาร์ 12.00–21.00 น.
📞 Phone: tel: 091 887 6829
🔗 Website: www.patpongmuseum.com
💰 Entrance fee: 350 บาท ราคาออนไลน์ 250 บาท`,
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ③
                "imageUrl": "https://image.flaticon.com/icons/png/512/122/122641.png",
                "action": {
                  "type": "message",
                  "label": "กลับไปยังหน้ารวมพิพิธภัณฑ์",
                  "text": "กลับไปยังหน้ารวมพิพิธภัณฑ์"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.confirmTravel = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "สนใจที่จะเดินทางไปยังสถานที่นี้ไหมคะ 🌞📃",
        },
        {
          type: `text`,
          text: "ถ้าใช่กดปุ่มยืนยันได้เลยน้า",
        },
        {
          "type": "template",
          "altText": "this is a confirm template",
          "template": {
              "type": "confirm",
              "text": "สนใจที่จะเดินทางไปยังสถานที่นี้หรือไม่",
              "actions": [
                  {
                    "type": "message",
                    "label": "สนใจ",
                    "text": "สนใจที่จะเดินทางไปยังสถานที่นี้"
                  },
                  {
                    "type": "message",
                    "label": "ไม่สนใจ",
                    "text": "ไม่สนใจที่จะเดินทางไปยังสถานที่นี้"
                  }
              ]
          }
        }
      ],
    }),
  });
}; 

exports.noconfirmTravel = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "โอเคค่า ถ้าสนใจก็เข้ามาเมนูท่องเที่ยวได้เลยน้า (❁ᴗ͈ˬᴗ͈)",
        },
      ],
    }),
  });
};

exports.userConfirmTravel = (bodyResponse) => {
  userTravel.findOne({userId : bodyResponse.events[0].source.userId})
  .then((res) => {
      if (res){
        userTravel.update({userId : bodyResponse.events[0].source.userId},{$set:{isConfirmTravel : true}},function (err,res) { 
          if(res) {
          console.log(res)
          console.log("success")
          } else {
          console.log(err)
          console.log("error")
          }
      })
      } else {
          console.log('User click menu Confirm Travel')
          userTravel.insertMany ({
                  userId : bodyResponse.events[0].source.userId,
                  isConfirmTravel : true
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
          text: `เดี๋ยวมดบอทจะบอกวิธีการเดินทางที่ทำให้คุณสามารถไปยังสถานนี้ที่คุณสนใจได้เลยค่า 📍✨`,
        },
        {
          "type": "text", // ①
          "text": "ส่งตำแหน่งปัจจุบันของคุณมาได้เลยค่ะ",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ④
                "action": {
                  "type": "location",
                  "label": `กดที่นี่เพื่อส่งตำแหน่งปัจจุบัน`
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.confirmDestinationMygrand = (bodyResponse) => {
  console.log('send des')
  console.log(bodyResponse)
      return request({
        method: `POST`,
        uri: `${LINE_MESSAGING_API}/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
          replyToken: bodyResponse.events[0].replyToken,
          messages: [
            {
              "type": "text", // ①
              "text": "และสุดท้าย ส่งตำแหน่งปลายทางที่ต้องการจะไปได้เลยค่ะ ᵔᴥᵔ",
              "quickReply": { // ②
                "items": [
                  {
                    "type": "action", // ④
                    "action": {
                      "type": "location",
                      "label": `กดที่นี่เพื่อส่งจุดหมาย`
                    }
                  },
                ]
              }
            }
          ],
        }),
      });
 };

exports.menuHistory = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "นี่คือประวัติการเดินทางที่คุณได้ไปมาทั้งหมดค่ะ 🛣 🥰",
        },
        {
          type: `text`,
          text: "วันที่ 22 มกราคม 2564",
        },
        {
          "type": "flex",
          "altText": "Design route",
          "contents": {
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "backgroundColor": "#93baed",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "FROM",
                      "color": "#ffffff66",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "color": "#ffffff",
                      "size": "xl",
                      "flex": 4,
                      "weight": "bold",
                      "text": "บางมด (KMUTT)"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "TO",
                      "color": "#ffffff66",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": "จตุจักร (Chatujak market)",
                      "color": "#ffffff",
                      "size": "xl",
                      "flex": 4,
                      "weight": "bold"
                    }
                  ]
                }
              ],
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Step by step",
                  "color": "#b7b7b7",
                  "size": "xs"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "รถแดง",
                      "size": "sm",
                      "gravity": "center"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [],
                          "cornerRadius": "30px",
                          "height": "12px",
                          "width": "12px",
                          "borderColor": "#EF454D",
                          "borderWidth": "2px"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "ขึ้นรถแดงจากหน้ามอ",
                      "gravity": "center",
                      "flex": 4,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg",
                  "cornerRadius": "30px",
                  "margin": "xl"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 1
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "filler"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [],
                              "width": "2px",
                              "backgroundColor": "#B7B7B7"
                            },
                            {
                              "type": "filler"
                            }
                          ],
                          "flex": 1
                        }
                      ],
                      "width": "12px"
                    },
                    {
                      "type": "text",
                      "text": "จุดลง : กม.9",
                      "gravity": "center",
                      "flex": 4,
                      "size": "xs",
                      "color": "#8c8c8c"
                    }
                  ],
                  "spacing": "lg",
                  "height": "64px"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "ปอ.141",
                          "gravity": "center",
                          "size": "sm"
                        }
                      ],
                      "flex": 1
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [],
                          "cornerRadius": "30px",
                          "width": "12px",
                          "height": "12px",
                          "borderWidth": "2px",
                          "borderColor": "#6486E3"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "ขึ้นรถ ปอ.141",
                      "gravity": "center",
                      "flex": 4,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg",
                  "cornerRadius": "30px"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 1
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "contents": [
                            {
                              "type": "filler"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [],
                              "width": "2px",
                              "backgroundColor": "#6486E3"
                            },
                            {
                              "type": "filler"
                            }
                          ],
                          "flex": 1
                        }
                      ],
                      "width": "12px"
                    },
                    {
                      "type": "text",
                      "text": "จุดลง : BTS หมอชิต-MRT สวนจตุจักร",
                      "gravity": "center",
                      "flex": 4,
                      "size": "xs",
                      "color": "#8c8c8c"
                    }
                  ],
                  "spacing": "lg",
                  "height": "64px"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "สิ้นสุด",
                      "gravity": "center",
                      "size": "sm"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [],
                          "cornerRadius": "30px",
                          "width": "12px",
                          "height": "12px",
                          "borderColor": "#6486E3",
                          "borderWidth": "2px"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "ถึงจุดหมาย",
                      "gravity": "center",
                      "flex": 4,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg",
                  "cornerRadius": "30px"
                }
              ]
            }
          }
        },
        {
          type: `text`,
          text: "วันที่ 25 มกราคม 2564",
        },
        {
          "type": "flex",
          "altText": "Design route",
          "contents": {
            "type": "bubble",
            "size": "giga",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": []
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "จุดขึ้นรถที่ใกล้ที่สุด",
                      "color": "#ffffff",
                      "size": "xl",
                      "flex": 4,
                      "weight": "bold",
                      "align": "center"
                    }
                  ]
                }
              ],
              "paddingAll": "20px",
              "backgroundColor": "#9CB7F3",
              "spacing": "md",
              "height": "80px",
              "paddingTop": "22px"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "ระยะห่าง",
                  "color": "#4B4B4B",
                  "size": "sm",
                  "weight": "bold"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "20:30",
                      "size": "sm",
                      "gravity": "center",
                      "offsetStart": "10px"
                    },
                    {
                      "type": "text",
                      "text": "Akihabara",
                      "gravity": "center",
                      "flex": 4,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg",
                  "cornerRadius": "30px",
                  "margin": "xl",
                  "offsetTop": "none"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "20:34",
                          "gravity": "center",
                          "size": "sm",
                          "offsetStart": "10px"
                        }
                      ],
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "Ochanomizu",
                      "gravity": "center",
                      "flex": 4,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg",
                  "cornerRadius": "30px",
                  "offsetBottom": "none",
                  "offsetTop": "xl"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "more",
                    "text": "hello"
                  },
                  "offsetTop": "37px",
                  "offsetBottom": "none",
                  "offsetStart": "250px",
                  "offsetEnd": "none",
                  "position": "absolute"
                },
                {
                  "type": "text",
                  "text": "บริเวณ",
                  "color": "#4B4B4B",
                  "weight": "bold",
                  "size": "sm",
                  "offsetBottom": "76.5px",
                  "offsetStart": "90px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [],
                  "cornerRadius": "30px",
                  "borderColor": "#6486E3",
                  "borderWidth": "2px",
                  "width": "10px",
                  "height": "10px",
                  "offsetStart": "-10px",
                  "offsetBottom": "54px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [],
                  "backgroundColor": "#6486E3",
                  "cornerRadius": "12px",
                  "borderWidth": "1.5px",
                  "height": "20px",
                  "width": "0.5px",
                  "offsetBottom": "51.5px",
                  "offsetStart": "-7.3px"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [],
                  "cornerRadius": "30px",
                  "width": "10px",
                  "height": "10px",
                  "borderWidth": "2px",
                  "borderColor": "#6486E3",
                  "offsetBottom": "49px",
                  "offsetStart": "-10px"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "more",
                    "text": "hello"
                  },
                  "offsetTop": "-79.5px",
                  "offsetStart": "125px"
                }
              ],
              "height": "135px"
            }
          }
        }
      ],
    }),
  });
};