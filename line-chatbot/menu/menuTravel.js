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
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                        },
                        {
                          "type": "text",
                          "text": "4.0",
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
                              "text": "東京旅行",
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
                              "text": "東京旅行",
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
                "imageUrl": "https://e7.pngegg.com/pngimages/985/993/png-clipart-coffee-cafe-icon-coffee-icon-brown-camera-icon.png",
                "action": {
                  "type": "message",
                  "label": "คาเฟ่นั่งชิล",
                  "text": "Sushi"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://cdn0.iconfinder.com/data/icons/navigation-and-map-1/85/map_location_city_street_pin_marker-512.png",
                "action": {
                  "type": "message",
                  "label": "สตรีทอาร์ต",
                  "text": "Tempura"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://cdn2.iconfinder.com/data/icons/location-map-simplicity/512/museum-512.png",
                "action": {
                  "type": "message",
                  "label": "พิพิธภัณฑ์",
                  "text": "Tempura"
                }
              },
              {
                "type": "action",
                "imageUrl": "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/temple.png",
                "action": {
                  "type": "message",
                  "label": "วัด",
                  "text": "Tempura"
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
