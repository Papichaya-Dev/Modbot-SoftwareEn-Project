const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// import function
const { functionmenu1, menu1ans } = require('./menu/functionmenu1')
const { functionmenu2, custompoint } = require('./menu/functionmenu2')
const { functionmenu3, timebus, resulttimebus } = require('./menu/functionmenu3')
const { functionmenu4, selectnumbus, cost140, cost141, cost76 , cost105, cost558, cost147, costminibus, cost68, cost101, cost720 } = require('./menu/functionmenu4')
const { functionmenu5 } = require('./menu/functionmenu5')
const { hellomessage, errormessage } = require('./reply-message/replytext')

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

// //DB Config
// const db = require('./config/keys').mongoURI;
// //Connect to MongoDB
// mongoose
//     .connect(db, { useUnifiedTopology:true, useNewUrlParser:true})
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

const config = require('./config');
const { post } = require('request');
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3003))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())




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
    }else if(req.body.events[0].message.text === 'ประวัติ') {
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