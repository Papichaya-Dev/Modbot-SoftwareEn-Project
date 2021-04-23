var request = require("request");

// Your Channel access token
// create LINE SDK config from env variables
const config = {
  channelAccessToken: "8/nQcDP87i59lfeImmXTfxyQSF28MN9odZKOLFMK1LTaPydVXADb38+PYPOuxvufEQ62N89drGbso0aqwh2n4bjp1LMSmxqCKwzZa0jlYTmxn+QdKjHoYfzXGGGtalEQ77M3RrBCsRIqWRxO1CWzjgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "86cab6614d4eccefeb0503cbf936c45c",
};
const Keyword = require('../model/Trainbotword')
const { errormessage } = require('../reply-message/replytext');
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.replyitem = (bodyResponse) => {
    Keyword.findOne({ keyword : bodyResponse.events[0].message.text})
    .then((res) => {
        if(res){
        // console.log(res.items[Math.floor((Math.random() * res.items.length))])
        let items = res.items
        let randomNumber = Math.floor((Math.random() * res.items.length))
        return request({
            method: `POST`,
            uri: `${LINE_MESSAGING_API}/reply`,
            headers: LINE_HEADER,
            body: JSON.stringify({
              replyToken: bodyResponse.events[0].replyToken,
              messages: [
                {
                  type: `text`,
                  text: `${items[randomNumber]}`,
                }
              ],
            }),
          });    
        
        } else {
            errormessage(bodyResponse)
        }

    })
   
};