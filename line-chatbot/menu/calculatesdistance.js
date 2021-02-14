var request = require("request");
// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.calcurateDistance = (startLatitude, startLongitude, endLatitude, endLongitude, unit) => {
	if ((startLatitude == endLatitude) && (startLongitude == endLongitude)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * startLatitude/180;
		var radlat2 = Math.PI * endLatitude/180;
		var theta = startLongitude-endLongitude;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist.toFixed(1);
	}
}

exports.resultCheckBusStop = (bodyResponse, resData) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
		  {
			"type": `text`,
			"text": `จุดขึ้นรถที่ใกล้ตัวคุณที่สุด มีดังนี้เลยค่ะ 📌`,
		  },
        //   {
        //     type: `text`,
        //     text: `${resData[1].bus_stop_name}`,
        //   },
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
                "backgroundColor": "#9CB7F3",
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
                        "text": `${resData[1].cal_from_start} กม.`,
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
                        "text": `ปอ.${resData[1].bus_no}`,
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
                            "text": `${resData[0].cal_from_start} กม.`,
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
                        "text": `ปอ.${resData[0].bus_no}`,
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
                //   {
                //     "type": "box",
                //     "layout": "horizontal",
                //     "contents": [
                //       {
                //         "type": "text",
                //         "text": "20:40",
                //         "gravity": "center",
                //         "size": "sm"
                //       },
                //       {
                //         "type": "box",
                //         "layout": "vertical",
                //         "contents": [
                //           {
                //             "type": "filler"
                //           },
                //           {
                //             "type": "filler"
                //           }
                //         ],
                //         "flex": 0
                //       },
                //       {
                //         "type": "text",
                //         "text": "Shinjuku",
                //         "gravity": "center",
                //         "flex": 4,
                //         "size": "sm"
                //       }
                //     ],
                //     "spacing": "lg",
                //     "cornerRadius": "30px"
                //   },
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
                    "text": `${resData[1].bus_stop_name}`,
                    "align": "center",
                    "position": "absolute",
                    "offsetTop": "52px",
                    "offsetBottom": "xs",
                    "offsetStart": "180px"
                  },
				  {
					"type": "text",
					"text": `${resData[0].bus_stop_name}`,
					"offsetTop": "-25px",
					"offsetBottom": "none",
					"offsetStart": "160px"
				  }
                ]
              },
              "size": "giga"
            }
          }
        ],
      }),
    });
  };
