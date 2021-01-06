var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

const {function1, function2, function3, function4, function5, cost, hellomessage, errormessage} = require('./function')
const config = require('./config')
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3003))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// Your Channel access token
const CHANNEL_ACCESS_TOKEN = 'STlko4OTagWzkDjoJI6OsICDVTEovMBXuPih9C36UTzMXPvRIqaregh58YgWnZXiO0YpaIAzU1tsbleGsvN8ig5JBgaQf+4rn5McETv/AyaKAuUo7t0Wd1p8MZWVo+31YT3LyGXAVAw2hTT2jg1RzwdB04t89/1O/w1cDnyilFU='

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
};

app.post('/webhook', (req, res) => {
    if (req.body.events[0].message.type !== 'text') {
        return;
      }
      if(req.body.events[0].message.text === 'สอบถามเส้นทาง') {
          function1(req.body)
      } else if(req.body.events[0].message.text === 'เช็กจุดขึ้นรถ') {
        function2(req.body)
    } else if(req.body.events[0].message.text === 'ตารางเดินรถ') {
        function3(req.body)
    } else if(req.body.events[0].message.text === 'ตารางค่าโดยสาร') {
        function4(req.body)
    } else if(req.body.events[0].message.text === 'ราคารถเมล์') {
        cost(req.body)
    } else if(req.body.events[0].message.text === 'ประวัติ') {
        function5(req.body)
    }
    else if(req.body.events[0].message.text === 'สวัสดี') {
        hellomessage(req.body)
    } else {
        errormessage(req.body)
    }
    });
// app.post('/webhook', (req, res) => {
//     if (req.body.events[0].message.type !== 'text') {
//         return;
//       }
//       reply(req.body);
//     });
    
    // const reply = (bodyResponse) => {
    //   return request({
    //     method: `POST`,
    //     uri: `${LINE_MESSAGING_API}/reply`,
    //     headers: LINE_HEADER,
    //     body: JSON.stringify({
    //       replyToken: bodyResponse.events[0].replyToken,
    //       messages: [
    //         {
    //           type: `text`,
    //           text: bodyResponse.events[0].message.text
    //         }
    //       ]
    //     })
    //   });
    // };

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})