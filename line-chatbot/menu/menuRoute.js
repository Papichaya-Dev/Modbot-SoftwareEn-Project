var request = require("request");

// Your Channel access token
const config = require('../config')
const CalculateRoute = require('../model/CalculateRoute');
const { errormessage, replyforOverFar } = require('../reply-message/replytext');
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.sendCurrentPointofmenuRoute = (bodyResponse) => {
  CalculateRoute.findOne({userId : bodyResponse.events[0].source.userId})
  .then((res) => {
      if (res){
        CalculateRoute.update({userId : bodyResponse.events[0].source.userId},{$set:{isCalculateRoute : true}},function (err,res) { 
          if(res) {
          console.log(res)
          console.log("success click menu calculateroute")
          } else {
          console.log(err)
          console.log("error")
          }
      })
      } else {
          console.log('click menu Calculate Route')
            CalculateRoute.insertMany ({
                  userId : bodyResponse.events[0].source.userId,
                  isCalculateRoute : true
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
          text: `สำหรับเมนูคำนวณเส้นทาง จะบอกถึงวิธีการเดินทางแบบ Step by step เลยค่ะ เพื่อให้คุณสามารถไปถึงจุดหมายได้ อย่างสะดวกรวดเร็วค่า ᵔᴥᵔ`,
        },
        {
          "type": "text", // ①
          "text": `ขั้นตอนแรก 🖍
ส่งตำแหน่งปัจจุบันของคุณมาได้เลยค่ะ`,
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

exports.sendDestinationPointofmenuRoute = (bodyResponse) => {
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
              "text": `และสุดท้าย ส่งตำแหน่งปลายทางที่ต้องการจะไปได้เลยค่ะ ᵔᴥᵔ`,
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

 exports.resultCalculateRoute = (bodyResponse,resData) => {
  console.log('resData : List station Not more than 1 km.', resData)
  let bufferData = resData.filter(item => item !== 'So Far Over 1 km.')
  let useStationforRoute = bufferData.sort((a,b) => a.cal_from_start - b.cal_from_start)
  console.log('use : Results of Calculate Route', useStationforRoute)
  console.log('Length of Route', useStationforRoute.length)
  let numberOfRoute = useStationforRoute.length
  var i ;
  for (i = 1; i > numberOfRoute+1; i++) {
  console.log(i)
  }
  if(useStationforRoute.length > 0){
    if(useStationforRoute !== 'So Far Over 1 km.'){
      let resArray = []
      resArray.push({
          "type": "text",
          "text": "Step by step",
          "color": "#b7b7b7",
          "size": "xs",
          "contents": []
      },
      {
        "type": "text",
        "text": `สามารถเลือกเดินทางได้ ${numberOfRoute} วิธี ดังนี้`,
        "color": "#b7b7b7",
        "size": "md",
        "contents": []
      })
    
      useStationforRoute.map((station) => {
        resArray.push({
            "type": "box",
            "layout": "horizontal",
            "contents": [
              // {
              //   "type": "text",
              //   "text": ` วิธีที่ ${i++} `,
              //   "size": "sm",
              //   "gravity": "center",
              //   "offsetTop": "-5px",
              // },
              {
                "type": "text",
                "text": `${i++}. ${station.bus_no}`,
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
                "text": `ขึ้นรถที่ ${station.station_name_start} ห่าง ${station.cal_from_start} กม.`,
                "gravity": "center",
                "flex": 4,
                "size": "sm"
              },
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
                "text": `จุดลงรถ ${station.station_name_end}`,
                "gravity": "center",
                "flex": 4,
                "size": "xs",
                "color": "#8c8c8c",
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
              },
            ],
            
            
            "spacing": "lg",
            "cornerRadius": "30px"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": `ราคา : ${station.bus_fare}`,
                "gravity": "center",
                "size": "sm",
                "weight": "bold",
                "offsetTop": "2.7px",
                "color": "#6486E3"
              },
            ],
            "spacing": "lg",
            "cornerRadius": "30px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [],
                "height": "2px",
                "backgroundColor": "#ECECEC",
                "width": "300px",
                "spacing": "none",
                "margin": "lg",
              }
            ]
          }
        )
      })
    
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
                    "size": "giga",
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
                              "text": `${resData[1].startAddress}`
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
                              "text": `${resData[1].endAddress}`,
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
                      "contents": resArray,
                    }
                  }
                }
              ],
            }),
          });
        } 
  }else{
    console.log("nooooooooooo")
    replyforOverFar(bodyResponse)
  }
 
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