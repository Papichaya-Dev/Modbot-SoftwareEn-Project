var request = require("request");

// Your Channel access token
const config = require('./config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu1 = (bodyResponse) => {
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
          "type": "text",
          "text": "😍 ลองพิมพ์ 'บางมด' ดูก่อนน้า 😍           ( ยังทำ function นี้ไม่เสร็จค่า ;-; )"
        },
        {
          "type": "sticker",
          "packageId": "11538",
          "stickerId": "51626515"
        }
      ],
    }),
  });
};

exports.menu1ans = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
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
        }
      ],
    }),
  });
};

exports.functionmenu2 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "text", // ①
          "text": "ลองจิ้มส่ง location ของเธอมาสิ ✨",
          "quickReply": { // ②
            "items": [
              {
                "type": "action", // ④
                "action": {
                  "type": "location",
                  "label": "Send location"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://image.freepik.com/free-vector/finger-point-hand-show-vector-thumb-direction-showing_79145-25.jpg",
                "action": {
                  "type": "message",
                  "label": "custom point",
                  "text": "เลือกจุดเอง"
                }
              },
            ]
          }
        }
      ],
    }),
  });
};

exports.custompoint = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          "type": "template",
          "altText": "this is a image carousel template",
          "template": {
              "type": "image_carousel",
              "columns": [
                  {
                    "imageUrl": "https://s3.ap-southeast-1.amazonaws.com/asset.punpro.com/contents/i9850/1596612528354-o287233138665194f48f8be8dc10dbf4c_4620693218568236411_200805_14.jpg",
                    "action": {
                      "type": "postback",
                      "label": "see detail",
                      "data": "action=buy&itemid=111"
                    }
                  },
                  {
                    "imageUrl": "https://thalays.com/wp-content/uploads/2019/10/20191004-van.jpg",
                    "action": {
                      "type": "message",
                      "label": "see detail",
                      "text": "yes"
                    }
                  },
                  {
                    "imageUrl": "https://img.tnews.co.th/userfiles/images/e51818be88c4c051a420b397b3bcff4c.jpg",
                    "action": {
                      "type": "uri",
                      "label": "see detail",
                      "uri": "http://example.com/page/222"
                    }
                  }
              ]
          }
        }
      ],
    }),
  });
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
                  "text": "Action 2"
                }
              },
              {
                "imageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/81542668_2879253665472249_7609980658877726720_o.jpg?_nc_cat=107&ccb=2&_nc_sid=825194&_nc_ohc=GfM34WNOJKsAX9T7B9d&_nc_ht=scontent.fbkk26-1.fna&oh=db096c2e25300cf3e1c9039d5844c9b3&oe=60234E0F",
                "action": {
                  "type": "message",
                  "label": ": รถแดง",
                  "text": "Action 3"
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
          "type": "template",
        "altText": "this is a buttons template",
        "template": {
            "type": "buttons",
            // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
            "title": "สายรถโดยสาร",
            "text": "กรุณาเลือกประเภทรถโดยสาร",
            "actions": [{
                "type": "postback",
                "text" : "ปอ.21",
                "label": "ปอ.21",
                "data": "action=buy&itemid=123"
            }, {
                "type": "postback",
                "label": "ปอ.141",
                "data": "action=add&itemid=123"
            }, {
                "type": "uri",
                "label": "ปอ.142",
                "uri": "http://example.com/page/123"
            }]
        }
      },
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
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "horizontal",
                "backgroundColor": "#FFFFFFFF",
                "contents": [
                  {
                    "type": "text",
                    "text": "กรุณาเลือกสายรถโดยสาร",
                    "weight": "bold",
                    "size": "sm",
                    "color": "#AAAAAA",
                    "align": "start",
                    "contents": []
                  }
                ]
              },
              "hero": {
                "type": "image",
                "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/12108903_10208180116724645_3631630818427710441_n.jpg?_nc_cat=110&ccb=2&_nc_sid=825194&_nc_ohc=ZkrUXDYfiTEAX9VB4hq&_nc_ht=scontent.fbkk26-1.fna&oh=49945cccddc005126c6446a5517ad84c&oe=6020CAB9",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover",
                "action": {
                  "type": "uri",
                  "label": "Action",
                  "uri": "https://linecorp.com/"
                }
              },
              "body": {
                "type": "box",
                "layout": "horizontal",
                "spacing": "md",
                "backgroundColor": "#FFFFFFFF",
                "borderColor": "#FFFFFFFF",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 2,
                    "contents": [
                      {
                        "type": "text",
                        "text": "ปอ.140",
                        "weight": "regular",
                        "size": "lg",
                        "flex": 1,
                        "align": "center",
                        "action": {
                          "type": "message",
                          "label": "ปอ.140",
                          "text": "ปอ.140"
                        },
                        "contents": []
                      },
                      {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#646060FF"
                      },
                      {
                        "type": "text",
                        "text": "ปอ.75",
                        "weight": "regular",
                        "size": "lg",
                        "flex": 2,
                        "align": "center",
                        "gravity": "center",
                        "contents": []
                      },
                      {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#646060FF"
                      },
                      {
                        "type": "text",
                        "text": "ปอ.141",
                        "weight": "regular",
                        "size": "lg",
                        "flex": 2,
                        "align": "center",
                        "gravity": "center",
                        "contents": []
                      },
                      {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#646060FF"
                      },
                      {
                        "type": "text",
                        "text": "ปอ.142",
                        "weight": "regular",
                        "size": "lg",
                        "flex": 1,
                        "align": "center",
                        "gravity": "bottom",
                        "contents": []
                      },
                      {
                        "type": "separator",
                        "margin": "sm",
                        "color": "#646060FF"
                      },
                      {
                        "type": "text",
                        "text": "ปอ.101",
                        "weight": "regular",
                        "size": "lg",
                        "flex": 1,
                        "align": "center",
                        "contents": []
                      }
                    ]
                  }
                ]
              }
            }
        }
        ],
      }),
    });
  };
exports.cost = (bodyResponse) => {
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
            "text": `ตารางค่าโดยสาร รถเมล์สายปอ.140 ค่า ✨`,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/135854472_519481418994370_526354295059293211_n.jpg?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=0omDL56fLnsAX9BVEva&_nc_ht=scontent.fbkk26-1.fna&oh=aca26c0ccf996e5f61dd10d2beec6fc9&oe=6021AE82",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/135854472_519481418994370_526354295059293211_n.jpg?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=0omDL56fLnsAX9BVEva&_nc_ht=scontent.fbkk26-1.fna&oh=aca26c0ccf996e5f61dd10d2beec6fc9&oe=6021AE82"
          }
        ],
      }),
    });
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
            type: `text`,
            text: "ประวัติการเดินทางของฉัน บลาๆ",
          },
          {
            "type": "template",
            "altText": "this is a confirm template",
            "template": {
                "type": "confirm",
                "text": "ต้องการบันทึกประวัติใช่หรือไม่",
                "actions": [
                    {
                      "type": "message",
                      "label": "Yes",
                      "text": "บันทึกประวัติ"
                    },
                    {
                      "type": "message",
                      "label": "No",
                      "text": "no"
                    }
                ]
            }
          }
        ],
      }),
    });
};

exports.hellomessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "สวัสดีค่า modbot ยินดีให้บริการค่ะ",
          },
          {
            "type": "sticker",
            "packageId": "11539",
            "stickerId": "52114146"
          }
        ],
      }),
    });
  };
  
exports.errormessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ขออภัยค่า modbot ยังไม่ทราบคำที่ท่านส่งมา เดี๋ยวทางเราจะอัปเดตให้น้า 🚀",
          },
          {
            "type": "sticker",
            "packageId": "11539",
            "stickerId": "52114126"
          }
        ],
      }),
    });
};