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
  console.log('resData : List station Not more than 1 km.',resData)
  let buffData = resData.filter(item => item !== 'So Far Over 1 km.')
  let useStation = buffData.sort((a, b) => a.cal_from_start - b.cal_from_start)
  console.log('use : Results of CheckbusStop', useStation)
  let resArray = []
  resArray.push({
    "type": "text",
    "text": "  ระยะห่าง                    บริเวณ                                    รถ",
    "color": "#4B4B4B",
    "size": "sm",
    "weight": "bold",
    "contents": []
  })

  useStation.map((station) => {
    resArray.push({
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "justifyContent": "center",
            "alignItems": "center",
            "contents":[ {
                "type": "box",
                "layout": "vertical",
                "contents":[
                  {
                        "type": "box",
                        "layout": "vertical",
                        "cornerRadius": "30px",
                        "contents": [],
                        "borderColor": "#6486E3",
                        "borderWidth": "1.5px",
                        "width": "8px",
                        "height": "8px",
                        // "offsetBottom":"-0.5px",
                        // "backgroundColor" : "#ADADAD",

                  },
                  // {
                  //       "type": "box",
                  //       "layout": "vertical",
                  //       "contents": [],
                  //       "width" : "1px",
                  //       "backgroundColor" : "#6486E3",
                  //       "cornerRadius": "20px",
                  //       "borderWidth" : "1.5px",
                  //       "borderColor" : "#6486E3",
                  //       "height": "15px",
                  //       "offsetStart":"3.2px",
                  //       // "offsetBottom":"30px",

                  //       // "paddingTop" : "md",
                  //       // "offsetTop" : "xs"


                  // }
                ]
              },

            ]
          },
          {
              "type": "text",
              "text": `${station.cal_from_start} กม.`,
              "flex": 0,
              "size": "sm",
              "offsetStart": "-18px"
          },
          
         
          {
            "type": "text",
            "text": `${station.station_name}`,
            "gravity": "center",
            "flex": 6,
            "size": "sm",
            "offsetStart": "10px"

          },
          {
          "type": "text",
          "flex": 0,
          "text": `${station.bus_no}`,
          "size": "sm"
          }
        ],
        "margin": "xl",
      })
  })

  // Array(useStation.length).fill().map((_,index) => {
  //   resArray.push({
  //     "type": "box",
  //     "layout": "vertical",
  //     "contents": [],
  //     "cornerRadius": "30px",
  //     "borderColor": "#6486E3",
  //     "borderWidth": "2px",
  //     "width": "10px",
  //     "height": "10px",
  //     "offsetStart": "-10px",
  //      "backgroundColor": "#6486E3"
  //   })
  //   resArray.push(
  //     {
  //       "type": "box",
  //       "layout": "vertical",
  //       "contents": [],
  //       "paddingBottom": "26px",
  //       "width" : "1px",
  //       "backgroundColor" : "#6486E3",
  //       "borderWidth" : "1.8px",
  //       "borderColor" : "#6486E3",
  //       "offsetStart" : "-7px",
  //       "height": "1px"
  //     })
  // })

  
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
  };

