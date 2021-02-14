var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu6 = (bodyResponse) => {
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
              "direction": "ltr",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
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
                        "margin": "none",
                        "align": "center"
                      }
                    ]
                  }
                ],
                "paddingAll": "20px",
                "backgroundColor": "#A195EE",
                "spacing": "md",
                "height": "70px",
                "paddingTop": "22px"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "ระยะห่าง",
                    "color": "#282828",
                    "size": "sm",
                    "margin": "none",
                    "weight": "bold",
                    "style": "normal",
                    "align": "start",
                    "contents": []
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "20:30",
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
                            "type": "filler"
                          }
                        ],
                        "flex": 0
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
                    "margin": "xl"
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
                            "type": "filler"
                          }
                        ],
                        "flex": 1,
                        "backgroundColor": "#EBE7E7",
                        "width": "600px",
                        "height": "1px",
                        "margin": "none",
                        "justifyContent": "center",
                        "alignItems": "center"
                      }
                    ],
                    "spacing": "none",
                    "height": "15px",
                    "width": "600px"
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
                            "type": "filler"
                          }
                        ],
                        "flex": 0
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
                        "flex": 1,
                        "height": "1px"
                      }
                    ],
                    "spacing": "lg",
                    "height": "1.5px",
                    "width": "600px",
                    "backgroundColor": "#EBE7E7"
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "20:40",
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
                            "type": "filler"
                          }
                        ],
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "Shinjuku",
                        "gravity": "center",
                        "flex": 4,
                        "size": "sm"
                      }
                    ],
                    "spacing": "lg",
                    "cornerRadius": "30px"
                  },
                  {
                    "type": "text",
                    "text": "รถ",
                    "margin": "xxl",
                    "position": "absolute",
                    "align": "center",
                    "gravity": "center",
                    "offsetTop": "xl",
                    "offsetStart": "115px",
                    "weight": "bold"
                  },
                  {
                    "type": "text",
                    "text": "บริเวณ",
                    "weight": "bold",
                    "align": "center",
                    "position": "absolute",
                    "offsetTop": "xl",
                    "offsetStart": "200px"
                  },
                  {
                    "type": "text",
                    "text": "ทดสอบบริเวณ",
                    "align": "center",
                    "position": "absolute",
                    "offsetTop": "52px",
                    "offsetBottom": "xs",
                    "offsetStart": "180px"
                  }
                ]
              },
              "size": "mega"
            }
          }
        ],
      }),
    });
};
