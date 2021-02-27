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
                        "text": `${resData[0].cal_from_start} กม.`,
                        "size": "sm",
                        "gravity": "center",
                        "offsetStart": "5px"
                      },
                      {
                        "type": "text",
                        "text": `${resData[0].bus_stop_name}`,
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
                            "text": `${resData[1].cal_from_start} กม.`,
                            "gravity": "center",
                            "size": "sm",
                            "offsetStart": "5px"
                          }
                        ],
                        "flex": 1
                      },
                      {
                        "type": "text",
                        "text": `${resData[1].bus_stop_name}`,
                        "gravity": "center",
                        "size": "sm",
                        "flex": 4,
                        // "offsetStart": "-87.5px"
                      }
                    ],
                    "spacing": "lg",
                    "cornerRadius": "30px",
                    "offsetBottom": "none",
                    "offsetTop": "xl"
                  },
                  {
                    "type": "text",
                    "text": "บริเวณ",
                    "color": "#4B4B4B",
                    "weight": "bold",
                    "size": "sm",
                    "offsetBottom": "76px",
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
                    "type": "text",
                    "text": "รถ",
                    "size": "sm",
                    "color": "#4B4B4B",
                    "weight": "bold",
                    "offsetBottom": "136px",
                    "offsetStart": "280px"
                  },
                  {
                    "type": "text",
                    "text": `ปอ.${resData[0].bus_no},${resData[1].bus_no}`,
                    "flex": 4,
                    "size": "sm",
                    "offsetBottom": "122px",
                    "offsetStart": "260px"
                  },
                  {
                    "type": "text",
                    "text": `ปอ.${resData[1].bus_no}`,
                    "flex": 4,
                    "size": "sm",
                    "offsetBottom": "105px",
                    "offsetStart": "260px"
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
