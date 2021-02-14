var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
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
		return dist;
	}
}

function calcurateDistance(startLatitude, startLongitude, endLatitude, endLongitude, unit) {
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
		return dist;
	}
}

// exports.calculateDistance = (bodyResponse) => {
//     Keyword.findOne({ keyword : bodyResponse.events[0].message.text})
//     .then((res) => {
//         if(res){
//         // console.log(res.items[Math.floor((Math.random() * res.items.length))])
//         let items = res.items
//         let randomNumber = Math.floor((Math.random() * res.items.length))
//         return request({
//             method: `POST`,
//             uri: `${LINE_MESSAGING_API}/reply`,
//             headers: LINE_HEADER,
//             body: JSON.stringify({
//               replyToken: bodyResponse.events[0].replyToken,
//               messages: [
//                 {
//                   type: `text`,
//                   text: `${items[randomNumber]}`,
//                 }
//               ],
//             }),
//           });    
        
//         } else {
//             errormessage(bodyResponse)
//         }

//     })
   
// };