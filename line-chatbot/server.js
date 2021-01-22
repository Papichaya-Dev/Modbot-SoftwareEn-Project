const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const Start = require('./model/UserStartPoint')

// import function
const { functionmenu1, menu1ans, menu1selectendpoint } = require('./menu/functionmenu1')
const { functionmenu2, custompoint } = require('./menu/functionmenu2')
const { functionmenu3, timebus, resulttimebus, timebus105, timebusvan } = require('./menu/functionmenu3')
const { functionmenu4, selectnumbus, cost140, cost141, cost76 , cost105, cost558, cost147, costminibus, cost68, cost101, cost720 } = require('./menu/functionmenu4')
const { functionmenu5 } = require('./menu/functionmenu5')
const { hellomessage, errormessage } = require('./reply-message/replytext')
const { functionmenu6 } = require('./menu/functionmenu6')

// Initialize the app
const app = express();
app.use(cors())

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
// Json Body Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;
//Connect to MongoDB
mongoose
    .connect(db, { useUnifiedTopology:true, useNewUrlParser:true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const config = require('./config');
const { post } = require('request');
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3003))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())




app.post('/webhook', (req, res) => {
    if (req.body.events[0].message.type === 'text') {
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
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.105') {
            timebus105(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถตู้') {
            timebusvan(req.body)
        }else if(req.body.events[0].message.text === 'ตารางค่าโดยสาร') {
            functionmenu4(req.body)
        } else if(req.body.events[0].message.text === 'ราคารถแดง') {
            costminibus(req.body)
        } else if(req.body.events[0].message.text === 'ราคารถเมล์') {
            selectnumbus(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.140') {
            cost140(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.76') {
            cost76(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.105') {
            cost105(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.558') {
            cost558(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.141') {
            cost141(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.147') {
            cost147(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.68') {
            cost68(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.101') {
            cost101(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.720') {
            cost720(req.body)
        }else if(req.body.events[0].message.text === 'คุยกับมดบอท') {
            functionmenu5(req.body)
        }else if(req.body.events[0].message.text === 'สอบถามประวัติการเดินทาง') {
            functionmenu6(req.body)
        }
        else if(req.body.events[0].message.text === 'สวัสดี') {
            hellomessage(req.body)
        }
         else {
            errormessage(req.body)
        }
    } else if (req.body.events[0].message.type === 'location') {
        menu1selectendpoint(req.body)
        console.log(req.body.events[0])
        let startPoint = null
        // Start.insertMany({
        //     userId : req.body.events[0].source.userId,
        //     longitude : req.body.events[0].message.longitude,
        //     latitude : req.body.events[0].message.latitude,
        //     address : req.body.events[0].message.address
        // })
        console.log(req.body.events[0].source.userId)
        Start.findOne({userId : req.body.events[0].source.userId})
            .then((res) => {
                console.log('5555',res)
                if (res){
                    let result = {
                        startLong : res.longitude,
                        startLat : res.latitude,
                        endLong : req.body.events[0].message.longitude,
                        endLat : req.body.events[0].message.latitude,
                    }
                    // function in here 
                    console.log(result)
                } else {
                    console.log('lookpad')
                    //   Start.insertMany({
                    //         userId : req.body.events[0].source.userId,
                    //         longitude : req.body.events[0].message.longitude,
                    //         latitude : req.body.events[0].message.latitude,
                    //         address : req.body.events[0].message.address
                    //     })
                }
            })
            .catch((err) => {
                console.log(err)
            })
        

    } else {
        return
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