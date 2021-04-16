var request = require("request");

// Your Channel access token
const config = require('../config')

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
                  "text": "เที่ยวย่านจุฬา-สามย่าน"
                }
              }
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
          "type": "text", // ①
          "text": `         🎐 บ้านอากงอาม่า 🎐 
☛ คาเฟ่ย่านคลองสานฝั่งธนฯ ที่นำบ้านเก่าที่เป็นเรือนไทยทรงปั้นหยาสุดคลาสสิคให้ฟีลลิ่งจีนๆ ที่ตั้งอยู่บนโลเคชั่นริมแม่น้ำเจ้าพระยา
☞ สำหรับที่นั่งก็มีให้เลือกหลากหลายมุม ใครที่ต้องการจะได้ภาพชิคๆ พร้อมชมวิวแม่น้ำเจ้าพระยาไปด้วยก็ต้องมานั่งที่มุมระเบียงริมน้ำ`,
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
          "text": `☞ เมนูเครื่องดื่มก็เป็นเมนูแบบง่ายๆ อย่างเช่นเก็กฮวย-เฉาก๋วยโบราณสูตรอาม่า และยังมีของทานเล่นอย่างขนมปัง เกี๊ยวซ่า ขนมไทย ฯลฯ 
เลิกงานแล้วไม่รู้จะไปที่ไหนลองมาเสพบรรยากาศสุดคลาสสิคที่นี่เลย บ้านอากงอาม่า ~`,
        },
        {
          "type": `text`,
          "text": `📍 Location: 253 ซ.สมเด็จเจ้าพระยา3 ถ.เจ้าพระยา เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: เปิดทุกวันเวลา 10.00 – 18.00 น.
📞 Phone: 02 437 5183 
👍 Facebook: www.facebook.com/mygpshouse/`,
        },
      //   {
      //     "type": "location",
      //     "title": "My Grandparent's House",
      //     "address": "253 ซอย สมเด็จเจ้าพระยา 3 แขวง สมเด็จเจ้าพระยา เขตคลองสาน กรุงเทพมหานคร 10600", 
      //     "latitude": 13.73775341912555,
      //     "longitude": 100.50027299717506  
      // }
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
        // {
        //   "type": "text", // ①
        //   "text": `https://www.youtube.com/watch?v=SqRuniFT_ks&ab_channel=Sunnyontour`,
        // },
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
          "type": `text`,
          "text": `📍 Location: 451 ถ.เจ้าพระยา เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: ร้านเปิดเวลา 09.00 – 18.00 น. ร้านปิดทุกวันอังคาร
📞 Phone: 062 362 9915 
👍 Facebook: www.facebook.com/waldenhomecafe`,
        },
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
          "type": `text`,
          "text": `📍 Location: 119/1 ซ.ราชพฤกษ์ 6 แขวงบางจาก เขตภาษีเจริญ กรุงเทพฯ
🏷️ Open – Close: ร้านเปิดเวลา 10:00 – 18:00 
📞 Phone: 092 449 8890
👍 Facebook: www.facebook.com/comeescapecafe`,
        },
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
        // {
        //   "type": "imagemap",
        //   "baseUrl": "https://cdn.discordapp.com/attachments/821804175767764995/822148318669963294/niyai2.jpg?_ignored=",
        //   "altText": "This is an imagemap",
        //   "baseSize": {
        //     "width": 1040,
        //     "height": 1040
        //   },
        //   "actions": []
        // },
        {
          "type": "text", // ①
          "text": `☞ สำหรับเมนูอาหารก็มีให้เลือกของคาวและของหวานไม่ว่าจะเป็น ข้าวหมูอบน้ำผึ้ง  สปาเก็ตตี้พริกแห้งเบคอนและขนมเค้กต่างๆ เลิกงานแล้วไม่รู้จะไปไหนลองมาหาเมนูอร่อยเป้นมื้อเย็นที่นี่ได้นะ`,
        },
        {
          "type": `text`,
          "text": `📍 Location: ซอยทุ่งมังกร 6 แขวงฉิมพลี เขตตลิ่งชัน กรุงเทพ
🏷️ Open – Close: เปิดวันจันทร์ – ศุกร์ 10.30 – 19.30 น. 
วันเสาร์ – อาทิตย์ 08.30 – 18:30 
* (หยุดทุกวันพุธ)
📞 Phone: 063 443 1961
👍 Facebook: www.facebook.com/niyaicafe`,
        },
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
          "type": `text`,
          "text": `📍 Location: ซอยกรุงธนบุรี 10 แขวงคลองต้นไทร เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: 09.30 - 17.30 น. (หยุดวันจันทร์)
📞 Phone: 08-0937-8762
👍 Facebook: www.facebook.com/Hintcoffee-115977776902444`,
        },
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
                "imageUrl": "https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/52637328_2294347244178322_466564221509828608_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHNrsPKUQOSi3yeqDGsZN8PqoQX7GPFFLCqhBfsY8UUsHvszhz4OQgsp9ZhwDeRmvMGKnFOdEhiswfbl-uXAepO&_nc_ohc=hNJW5bXdczQAX9XdLiO&_nc_ht=scontent.fbkk13-2.fna&oh=9216643b06715312df54537786d05128&oe=6085B6F8",
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
          "type": `text`,
          "text": `📍 Location: ถนนเชียงใหม่ แขวงคลองสาน เขตคลองสาน กรุงเทพฯ
🏷️ Open – Close: ศาลเจ้าแม่หม่าโจ้ว เปิดวันจันทร์ เวลา 11:00 – 20:00 น. และวันอังคาร – วันอาทิตย์ เวลา 09.00–20.00 น.
• โซน Art&Craft Shop เปิดทุกวันเวลา 10.00 – 20.00 น.
• โซน Eatery Zone เปิดทุกวันเวลา 10.00 -22.00 น.
📞 Phone: 091 187 1919
👍 Facebook: www.facebook.com/lhong1919`,
        },
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
          "type": `text`,
          "text": `📍 Location: 460/8 ถนนสิรินธร แขวงบางพลัด เขตบางพลัด กรุงเทพฯ
🏷️ Open – Close: 11.00-23.00 น.
📞 Phone: 08-1817-2888
👍 Facebook: www.facebook.com/ChangChuiBKK`,
        },
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
          "type": `text`,
          "text": `📍 Location: 41/1-5 เจริญนคร คลองสาน กรุงเทพฯ
🏷️ Open – Close: ทุกวันเวลา 11.00-23.00 น.
📞 Phone: 0-2861-0950
👍 Facebook: www.facebook.com/TheJamFactoryBangkok`,
        },
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
          "type": `text`,
          "text": `📍 Location: 371 ซอย อรุณอมรินทร์ 6 เเขวง วัดกัลยาณ์ เขตธนบุรี กรุงเทพมหานคร
🏷️ Open – Close: 06.00-18.00 น.`,
        },
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
          "type": `text`,
          "text": `📍 Location: ซอย อิสรภาพ 42 แขวง วัดอรุณ เขตบางกอกใหญ่ กรุงเทพฯ
🏷️ Open – Close: 06.00-18.00 น.`,
        },
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
          "type": `text`,
          "text": `📍 Location: 256 Thoet Thai Rd, แขวง บางยี่เรือ เขตธนบุรี กรุงเทพฯ
🏷️ Open – Close: 06.00-18.00 น.
📞 Phone: 086-991-7658`,
        },
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
          "type": `text`,
          "text": `📍 Location: ซอยเทอดไท 28 แขวงตลาดพลู เขตธนบุรี กรุงเทพฯ
🏷️ Open – Close: ทุกวัน เวลา 07.00 – 18.00 น.
📞 Phone: 02-465-1901`,
        },
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
          // {
          //   "type": "flex",
          //   "altText": "Design route",
          //   "contents": {
          //       "type": "bubble",
          //       "direction": "ltr",
          //       "header": {
          //         "type": "box",
          //         "layout": "vertical",
          //         "backgroundColor": "#cc7878",
          //         "contents": [
          //           {
          //             "type": "box",
          //             "layout": "vertical",
          //             "contents": [
          //               {
          //                 "type": "text",
          //                 "text": "FROM",
          //                 "color": "#ffffff66",
          //                 "size": "sm"
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "สยาม ( Siam )",
          //                 "color": "#ffffff",
          //                 "size": "xl",
          //                 "flex": 4,
          //                 "weight": "bold"
          //               }
          //             ]
          //           },
          //           {
          //             "type": "box",
          //             "layout": "vertical",
          //             "contents": [
          //               {
          //                 "type": "text",
          //                 "text": "TO",
          //                 "color": "#ffffff66",
          //                 "size": "sm"
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "เยาวราช ( Chinatown )",
          //                 "color": "#ffffff",
          //                 "size": "xl",
          //                 "flex": 4,
          //                 "weight": "bold"
          //               }
          //             ]
          //           }
          //         ],
          //       },
          //       "body": {
          //         "type": "box",
          //         "layout": "vertical",
          //         "contents": [
          //           {
          //             "type": "text",
          //             "text": "Step by step",
          //             "color": "#b7b7b7",
          //             "size": "xs"
          //           },
          //           {
          //             "type": "box",
          //             "layout": "horizontal",
          //             "contents": [
          //               {
          //                 "type": "text",
          //                 "text": "รถแดง",
          //                 "size": "sm",
          //                 "gravity": "center"
          //               },
          //               {
          //                 "type": "box",
          //                 "layout": "vertical",
          //                 "contents": [
          //                   {
          //                     "type": "filler"
          //                   },
          //                   {
          //                     "type": "box",
          //                     "layout": "vertical",
          //                     "contents": [],
          //                     "cornerRadius": "30px",
          //                     "height": "12px",
          //                     "width": "12px",
          //                     "borderColor": "#EF454D",
          //                     "borderWidth": "2px"
          //                   },
          //                   {
          //                     "type": "filler"
          //                   }
          //                 ],
          //                 "flex": 0
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "ขึ้นรถแดงจากหน้ามอ",
          //                 "gravity": "center",
          //                 "flex": 4,
          //                 "size": "sm"
          //               }
          //             ],
          //             "spacing": "lg",
          //             "cornerRadius": "30px",
          //             "margin": "xl"
          //           },
          //           {
          //             "type": "box",
          //             "layout": "horizontal",
          //             "contents": [
          //               {
          //                 "type": "box",
          //                 "layout": "baseline",
          //                 "contents": [
          //                   {
          //                     "type": "filler"
          //                   }
          //                 ],
          //                 "flex": 1
          //               },
          //               {
          //                 "type": "box",
          //                 "layout": "vertical",
          //                 "contents": [
          //                   {
          //                     "type": "box",
          //                     "layout": "horizontal",
          //                     "contents": [
          //                       {
          //                         "type": "filler"
          //                       },
          //                       {
          //                         "type": "box",
          //                         "layout": "vertical",
          //                         "contents": [],
          //                         "width": "2px",
          //                         "backgroundColor": "#B7B7B7"
          //                       },
          //                       {
          //                         "type": "filler"
          //                       }
          //                     ],
          //                     "flex": 1
          //                   }
          //                 ],
          //                 "width": "12px"
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "จุดลง : กม.9",
          //                 "gravity": "center",
          //                 "flex": 4,
          //                 "size": "xs",
          //                 "color": "#8c8c8c"
          //               }
          //             ],
          //             "spacing": "lg",
          //             "height": "64px"
          //           },
          //           {
          //             "type": "box",
          //             "layout": "horizontal",
          //             "contents": [
          //               {
          //                 "type": "box",
          //                 "layout": "horizontal",
          //                 "contents": [
          //                   {
          //                     "type": "text",
          //                     "text": "ปอ.141",
          //                     "gravity": "center",
          //                     "size": "sm"
          //                   }
          //                 ],
          //                 "flex": 1
          //               },
          //               {
          //                 "type": "box",
          //                 "layout": "vertical",
          //                 "contents": [
          //                   {
          //                     "type": "filler"
          //                   },
          //                   {
          //                     "type": "box",
          //                     "layout": "vertical",
          //                     "contents": [],
          //                     "cornerRadius": "30px",
          //                     "width": "12px",
          //                     "height": "12px",
          //                     "borderWidth": "2px",
          //                     "borderColor": "#6486E3"
          //                   },
          //                   {
          //                     "type": "filler"
          //                   }
          //                 ],
          //                 "flex": 0
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "ขึ้นรถ ปอ.141",
          //                 "gravity": "center",
          //                 "flex": 4,
          //                 "size": "sm"
          //               }
          //             ],
          //             "spacing": "lg",
          //             "cornerRadius": "30px"
          //           },
          //           {
          //             "type": "box",
          //             "layout": "horizontal",
          //             "contents": [
          //               {
          //                 "type": "box",
          //                 "layout": "baseline",
          //                 "contents": [
          //                   {
          //                     "type": "filler"
          //                   }
          //                 ],
          //                 "flex": 1
          //               },
          //               {
          //                 "type": "box",
          //                 "layout": "vertical",
          //                 "contents": [
          //                   {
          //                     "type": "box",
          //                     "layout": "horizontal",
          //                     "contents": [
          //                       {
          //                         "type": "filler"
          //                       },
          //                       {
          //                         "type": "box",
          //                         "layout": "vertical",
          //                         "contents": [],
          //                         "width": "2px",
          //                         "backgroundColor": "#6486E3"
          //                       },
          //                       {
          //                         "type": "filler"
          //                       }
          //                     ],
          //                     "flex": 1
          //                   }
          //                 ],
          //                 "width": "12px"
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "จุดลง : BTS หมอชิต-MRT สวนจตุจักร",
          //                 "gravity": "center",
          //                 "flex": 4,
          //                 "size": "xs",
          //                 "color": "#8c8c8c"
          //               }
          //             ],
          //             "spacing": "lg",
          //             "height": "64px"
          //           },
          //           {
          //             "type": "box",
          //             "layout": "horizontal",
          //             "contents": [
          //               {
          //                 "type": "text",
          //                 "text": "สิ้นสุด",
          //                 "gravity": "center",
          //                 "size": "sm"
          //               },
          //               {
          //                 "type": "box",
          //                 "layout": "vertical",
          //                 "contents": [
          //                   {
          //                     "type": "filler"
          //                   },
          //                   {
          //                     "type": "box",
          //                     "layout": "vertical",
          //                     "contents": [],
          //                     "cornerRadius": "30px",
          //                     "width": "12px",
          //                     "height": "12px",
          //                     "borderColor": "#6486E3",
          //                     "borderWidth": "2px"
          //                   },
          //                   {
          //                     "type": "filler"
          //                   }
          //                 ],
          //                 "flex": 0
          //               },
          //               {
          //                 "type": "text",
          //                 "text": "ถึงจุดหมาย",
          //                 "gravity": "center",
          //                 "flex": 4,
          //                 "size": "sm"
          //               }
          //             ],
          //             "spacing": "lg",
          //             "cornerRadius": "30px"
          //           }
          //         ]
          //       }
          //   }
          // },
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
