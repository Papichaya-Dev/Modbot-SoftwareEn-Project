var request = require("request");

// Your Channel access token
const config = require('../config')
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
        let testitem = ["test item", "test item2", "test item3"]
        console.log(testitem)
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