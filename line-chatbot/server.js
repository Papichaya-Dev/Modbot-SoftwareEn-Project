var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

const {functionmenu1, functionmenu2, functionmenu3, functionmenu4, functionmenu5, cost, hellomessage, errormessage, menu1ans, timebus, resulttimebus,
custompoint, selectnumbus} = require('./function')
const config = require('./config')
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3003))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/webhook', (req, res) => {
    if (req.body.events[0].message.type !== 'text') {
        return;
      }
      if(req.body.events[0].message.text === 'สอบถามเส้นทาง') {
          functionmenu1(req.body)
      } else if(req.body.events[0].message.text === 'บางมด') {
        menu1ans(req.body)
    }else if(req.body.events[0].message.text === 'เช็กจุดขึ้นรถ') {
        functionmenu2(req.body)
    }else if(req.body.events[0].message.text === 'เลือกจุดเอง') {
        custompoint(req.body)
    } else if(req.body.events[0].message.text === 'ตารางเดินรถ') {
        functionmenu3(req.body)
    } else if(req.body.events[0].message.text === 'ตารางเวลารถเมล์') {
        timebus(req.body)
    }else if(req.body.events[0].message.text === 'ปอ.21') {
        resulttimebus(req.body)
    }else if(req.body.events[0].message.text === 'ตารางค่าโดยสาร') {
        functionmenu4(req.body)
    } else if(req.body.events[0].message.text === 'ราคารถเมล์') {
        selectnumbus(req.body)
    }else if(req.body.events[0].message.text === 'ปอ.140') {
        cost(req.body)
    } else if(req.body.events[0].message.text === 'ประวัติ') {
        functionmenu5(req.body)
    }
    else if(req.body.events[0].message.text === 'สวัสดี') {
        hellomessage(req.body)
    }
     else {
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