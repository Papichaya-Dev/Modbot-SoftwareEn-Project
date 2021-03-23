const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const config = require('./config');

// import model
const Start = require('./model/UserStartPoint');
const CheckBusStop = require('./model/CheckBusStop');
const Keyword = require('./model/Trainbotword');
const Question = require('./model/QuestionfromUser');
const BusData = require('./model/BusData');
const CalculateRoute = require('./model/CalculateRoute');
const Bus = require('./model/Bus');
// import function
const { sendCurrentPointofmenuRoute, menu1ans, menu1selectendpoint, sendDestinationPointofmenuRoute, prepareforResultRoute } = require('./menu/menuRoute')
const { sendCurrentPoint, sendDestinationPoint, prepareCheckbusStop, moreDetail} = require('./menu/menuCheckbusStop')
const { menuTimebus, timebus, resulttimebus, timebus105, timebus76, timebus140, timebus141, timebusvan, timeminibus, timebus720,
timebus101, timebus68 } = require('./menu/menuTimebus')
const { menuPriceTable, selectnumbus, cost140, cost141, cost76 , cost105, cost558, cost147, costminibus, cost68, cost101, cost720, vancost,
cost21, cost75 } = require('./menu/menuPriceTable')
const { menuChatwithModbot, chatwithmodbot, fortunetelling, questionuser, thankyouQuestion, numberzero, numberone , numbertwo, numberthree,
numberfour, numberfive, numbersix, numberseven, numbereight , numbernine, nointerest, problemfromuser, thankyouproblem, confirmquestion,
noconfirmquestion, confirmproblem, noconfirmproblem} = require('./menu/menuChatwithModbot')
const { calcurateDistance, resultCheckBusStop } = require('./menu/calculatesdistance');
const { hellomessage, errormessage } = require('./reply-message/replytext')
const { menuTravel, travelThonburi, thonburiCafe, myGrandparentsHouse, homeWaldenCafe, comeEscapeCafe, niyaiCafe, hintCoffee } = require('./menu/menuTravel')
const { replyitem } = require('./menu/functionsystem');

// Initialize the app
const app = express();
app.use(cors())

// Middlewares Form Data Middleware
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
// create LINE SDK client
const { post } = require('request');
app.set('port', (process.env.PORT || 3003))

app.post('/webhook', (req, res) => {
    if (req.body.events[0].message.type === 'text') {
        if(req.body.events[0].message.text === 'สอบถามเส้นทาง') {
            sendCurrentPointofmenuRoute(req.body)
        } else if(req.body.events[0].message.text === 'บางมด') {
            menu1ans(req.body)
        }else if(req.body.events[0].message.text === 'เช็กจุดขึ้นรถ') {
            sendCurrentPoint(req.body)
        }else if(req.body.events[0].message.text === 'รายละเอียดเพิ่มเติมของจุดขึ้นรถ') {
            moreDetail(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเดินรถ') {
            menuTimebus(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลารถเมล์') {
            timebus(req.body)
        }else if(req.body.events[0].message.text === 'ปอ.21') {
            resulttimebus(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.105') {
            timebus105(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.76') {
            timebus76(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.140') {
            timebus140(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.141') {
            timebus141(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.720') {
            timebus720(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.101') {
            timebus101(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถปอ.68') {
            timebus68(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถตู้') {
            timebusvan(req.body)
        }else if(req.body.events[0].message.text === 'ตารางเวลาเดินรถแดง') {
            timeminibus(req.body)
        }else if(req.body.events[0].message.text === 'ตารางค่าโดยสาร') {
            menuPriceTable(req.body)
        } else if(req.body.events[0].message.text === 'ราคารถแดง') {
            costminibus(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถตู้') {
            vancost(req.body)
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
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.21') {
            cost21(req.body)
        }else if(req.body.events[0].message.text === 'ราคารถเมล์ปอ.75') {
            cost75(req.body)
        }else if(req.body.events[0].message.text === 'คุยกับมดบอท') {
            menuChatwithModbot(req.body)
        }else if(req.body.events[0].message.text === 'พูดคุยทั่วไป') {
            chatwithmodbot(req.body)
        }else if(req.body.events[0].message.text === 'สนใจทำนายดวง') {
            fortunetelling(req.body)
        }else if(req.body.events[0].message.text === 'ยังไม่สนใจ') {
            nointerest(req.body)
        }else if(req.body.events[0].message.text === 'เลข0') {
            numberzero(req.body)
        }else if(req.body.events[0].message.text === 'เลข1') {
            numberone(req.body)
        }else if(req.body.events[0].message.text === 'เลข2') {
            numbertwo(req.body)
        }else if(req.body.events[0].message.text === 'เลข3') {
            numberthree(req.body)
        }else if(req.body.events[0].message.text === 'เลข4') {
            numberfour(req.body)
        }else if(req.body.events[0].message.text === 'เลข5') {
            numberfive(req.body)
        }else if(req.body.events[0].message.text === 'เลข6') {
            numbersix(req.body)
        }else if(req.body.events[0].message.text === 'เลข7') {
            numberseven(req.body)
        }else if(req.body.events[0].message.text === 'เลข8') {
            numbereight(req.body)
        }else if(req.body.events[0].message.text === 'เลข9') {
            numbernine(req.body)
        }else if(req.body.events[0].message.text === 'สถานที่ท่องเที่ยวน่าสนใจ') {
            menuTravel(req.body)
        }else if(req.body.events[0].message.text === 'เที่ยวฝั่งธนฯ') {
            travelThonburi(req.body)
        }else if(req.body.events[0].message.text === 'คาเฟ่นั่งชิลฝั่งธน') {
            thonburiCafe(req.body)
        }else if(req.body.events[0].message.text === 'บ้านอากงอาม่า') {
            myGrandparentsHouse(req.body)
        }else if(req.body.events[0].message.text === 'Home Walden Cafe') {
            homeWaldenCafe(req.body)
        }else if(req.body.events[0].message.text === 'Come Escape Cafe') {
            comeEscapeCafe(req.body)
        }else if(req.body.events[0].message.text === 'Niyai Cafe') {
            niyaiCafe(req.body)
        }else if(req.body.events[0].message.text === 'hint coffee') {
            hintCoffee(req.body)
        }else if(req.body.events[0].message.text === 'หวัดดี') {
            hellomessage(req.body)
        }else if(req.body.events[0].message.text === 'ไม่ต้องการส่งข้อเสนอ') {
            noconfirmquestion(req.body)
        }else if(req.body.events[0].message.text === 'ไม่ต้องการแจ้งปัญหา') {
            noconfirmproblem(req.body)
        }else if(req.body.events[0].message.text === 'แจ้งปัญหาการใช้งาน') {
            confirmproblem(req.body)
        }else if(req.body.events[0].message.text === 'ต้องการแจ้งปัญหาการใช้งาน') {
            problemfromuser(req.body)
            console.log("แจ้งปัญหา")
        }else if(req.body.events[0].message.text === 'อยากเสนอเเนะ') {
            confirmquestion(req.body)
        }else if(req.body.events[0].message.text === 'ต้องการส่งข้อเสนอเเนะ') {
            questionuser(req.body)
            console.log("เสนอเเนะ")
        }
        else {
            // console.log(req.body.events[0].message.text)
            Question.findOne({userId : req.body.events[0].source.userId , currentQuestion : true})
                .then((data) => {
                    if(data) {
                        // console.log(res)
                        let oldQuestion = data.suggestion
                        oldQuestion.push({text : req.body.events[0].message.text })
                        console.log(oldQuestion)
                        Question.updateOne({userId : req.body.events[0].source.userId},{$set:{suggestion : oldQuestion , currentQuestion : false}},function (err,data) {
                            if(data) {
                                console.log("success")
                                thankyouQuestion(req.body)
                            } else {
                                console.log(err)
                                console.log("error")
                            }
                        })
                        thankyouQuestion(req.body)
                    } else {
                        replyitem(req.body)
                    }
                })
                Question.findOne({userId : req.body.events[0].source.userId , currentProblem : true})
                .then((data) => {
                    if(data) {
                        // console.log(res)
                        let oldProblem = data.problem
                        oldProblem.push({text : req.body.events[0].message.text })
                        Question.updateOne({userId : req.body.events[0].source.userId},{$set:{problem : oldProblem , currentProblem : false}},function (err,data) {
                            if(data) {
                                console.log("success")
                                thankyouproblem(req.body)
                            } else {
                                console.log(err)
                                console.log("error")
                            }
                        })
                        thankyouproblem(req.body)
                    } else {
                        replyitem(req.body)
                    }
                })
        } 
        
    } else if (req.body.events[0].message.type === 'location') {
        // console.log(req.body.events[0])
        // console.log(req.body.events[0].source.userId)
        CheckBusStop.findOne({userId : req.body.events[0].source.userId , isCheckBusStop : true})
            .then((res) => {
                console.log(res)
                console.log(res.startLatitude)
                if (!res.startLongitude){
                    CheckBusStop.findOneAndUpdate(
                        {userId : req.body.events[0].source.userId , isCheckBusStop : true}, 
                        {$set: {
                                startLongitude: req.body.events[0].message.longitude, 
                                startLatitude: req.body.events[0].message.latitude, 
                                startAddress: req.body.events[0].message.address
                               }
                        })
                        .then(data => {
                            console.log('update start complete')
                            sendDestinationPoint(req.body)
                        })
                        .catch((error) => {
                            console.log(error)
                            res.status(500).json({ message: error.message });
                        })
                    // let result = {
                    //     startLongitude : req.body.events[0].message.longitude,
                    //     startLatitude : req.body.events[0].message.latitude,
                    //     endLongitude : req.body.events[0].message.longitude,
                    //     endLatitude : req.body.events[0].message.latitude,
                    // }
                    // // // function in here 
                    // console.log(result)
                } else {
                    console.log('longitude')
                    console.log(req.body.events[0].message.longitude)
                    let calDisStart21
                    CheckBusStop.findOneAndUpdate(
                        {userId : req.body.events[0].source.userId , isCheckBusStop : true}, 
                        {$set: {
                                endLongitude: req.body.events[0].message.longitude , 
                                endLatitude: req.body.events[0].message.latitude, 
                                endAddress: req.body.events[0].message.address
                               }
                        })
                        .then(async data => {
                            console.log('5555555555555555555', data)
                            let calData = {
                                userId: data.userId,
                                startLatitude: data.startLatitude,
                                startLongitude: data.startLongitude,
                                endLongitude: req.body.events[0].message.longitude , 
                                endLatitude: req.body.events[0].message.latitude, 
                            }
                             Bus.find().then(async data => {
                                let num = 0
                                Promise.all(data.map(async doc => {
                                    let docStartPromise = doc.stations.map((busStop) => {
                                        return {
                                            station_name : busStop.station_name,
                                            cal_from_start : calcurateDistance(calData.startLatitude, calData.startLongitude, busStop.latitude, busStop.longitude, 'K'),
                                            bus_no : doc.bus_no,
                                            how_to_go: busStop.how_to_go

                                        }
                                         
                                    })

                                    let docEndPromise = doc.stations.map((busStop) => {
                                        return {
                                            station_name : busStop.station_name,
                                            cal_from_end : calcurateDistance(calData.endLatitude, calData.endLongitude, busStop.latitude, busStop.longitude, 'K'),
                                            bus_no : doc.bus_no,
                                            how_to_go: busStop.how_to_go

                                        }
                                         
                                    })

                                     let testStartReturn = await Promise.all(docStartPromise)
                                        .then(async (data) => {
                                            let sortData = data.sort((a, b) => a.cal_from_start - b.cal_from_start)
                                            console.log(sortData)
                                            // testSend(req.body, sortData[0].cal_from_start)
                                            let mostFar = await Promise.all(docEndPromise)
                                                .then((endData) => {
                                                    let sortEndData = endData.sort((a, b) => a.cal_from_end - b.cal_from_end)
                                                    console.log('endddddddddddddd', sortEndData[0])
                                                    return sortEndData[0].cal_from_end
                                                })
                                            if(parseFloat(mostFar) <= 1) {
                                                return sortData[0]
                                            } else {
                                                return "SoFar"
                                            }
                                            
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            return res.json({error: err})
                                        })
                                    return testStartReturn
                                }))
                                .then((resData) => {
                                    console.log(resData)
                                    resultCheckBusStop(req.body, resData)
                                    console.log('Prepare test delete', calData.userId)
                                    CheckBusStop.deleteOne({userId : calData.userId}).then(() => console.log('delete complete'))
                                    
                                })
                            })
                            console.log(calDisStart21)
                            console.log('update end complete')
                            // prepareCheckbusStop(req.body)
                        })
                        .catch((error) => {
                            console.log(error)
                            res.status(500).json({ message: error.message });
                        })
                }
                //****************************** */
                // } else {
                //     console.log('lookpad')
                //       CheckBusStop.insertMany({
                //             userId : req.body.events[0].source.userId,
                //             startLongitude : req.body.events[0].message.longitude,
                //             startLatitude : req.body.events[0].message.latitude,
                //             startAddress : req.body.events[0].message.address,
                //             isCheckBusStop : true,
                //         })
                //         sendDestinationPoint(req.body)
                // }
            })
            CalculateRoute.findOne({userId : req.body.events[0].source.userId , isCalculateRoute : true})
            .then((res) => {
                console.log(res)
                console.log(res.startLatitude)
                if (!res.startLongitude){
                    CalculateRoute.findOneAndUpdate(
                        {userId : req.body.events[0].source.userId , isCalculateRoute : true}, 
                        {$set: {
                                startLongitude: req.body.events[0].message.longitude, 
                                startLatitude: req.body.events[0].message.latitude, 
                                startAddress: req.body.events[0].message.address
                               }
                        })
                        .then(data => {
                            console.log('update start complete')
                            sendDestinationPointofmenuRoute(req.body)
                        })
                        .catch((error) => {
                            console.log(error)
                            res.status(500).json({ message: error.message });
                        })
                    // let result = {
                    //     startLongitude : req.body.events[0].message.longitude,
                    //     startLatitude : req.body.events[0].message.latitude,
                    //     endLongitude : req.body.events[0].message.longitude,
                    //     endLatitude : req.body.events[0].message.latitude,
                    // }
                    // // // function in here 
                    // console.log(result)
                } else {
                    console.log('longitude')
                    console.log(req.body.events[0].message.longitude)
                    let calDisStart21
                    CalculateRoute.findOneAndUpdate(
                        {userId : req.body.events[0].source.userId , isCalculateRoute : true}, 
                        {$set: {
                                endLongitude: req.body.events[0].message.longitude , 
                                endLatitude: req.body.events[0].message.latitude, 
                                endAddress: req.body.events[0].message.address
                               }
                        })
                        // .then(async data => {
                        //     console.log('5555555555555555555', data)
                        //     let calData = {
                        //         userId: data.userId,
                        //         startLatitude: data.startLatitude,
                        //         startLongitude: data.startLongitude,
                        //         endLongitude: req.body.events[0].message.longitude , 
                        //         endLatitude: req.body.events[0].message.latitude, 
                        //     }
                        //      BusData.find().then(async data => {
                        //         let num = 0
                        //         Promise.all(data.map(async doc => {
                        //             let docStartPromise = doc.bus_stop.map((busStop) => {
                        //                 return {
                        //                     bus_stop_name : busStop.bus_stop_name,
                        //                     cal_from_start : calcurateDistance(calData.startLatitude, calData.startLongitude, busStop.latitude, busStop.longitude, 'K'),
                        //                     bus_no : doc.bus_no,
                        //                     how_to_go: busStop.how_to_go

                        //                 }
                                         
                        //             })

                        //             let docEndPromise = doc.bus_stop.map((busStop) => {
                        //                 return {
                        //                     bus_stop_name : busStop.bus_stop_name,
                        //                     cal_from_end : calcurateDistance(calData.endLatitude, calData.endLongitude, busStop.latitude, busStop.longitude, 'K'),
                        //                     bus_no : doc.bus_no,
                        //                     how_to_go: busStop.how_to_go

                        //                 }
                                         
                        //             })

                                    

                        //              let testStartReturn = await Promise.all(docStartPromise)
                        //                 .then(async (data) => {
                        //                     let sortData = data.sort((a, b) => a.cal_from_start - b.cal_from_start)
                        //                     console.log(sortData)
                        //                     // testSend(req.body, sortData[0].cal_from_start)
                        //                     let mostFar = await Promise.all(docEndPromise)
                        //                         .then((endData) => {
                        //                             let sortEndData = endData.sort((a, b) => a.cal_from_end - b.cal_from_end)
                        //                             console.log('endddddddddddddd', sortEndData[0])
                        //                             return sortEndData[0].cal_from_end
                        //                         })
                        //                     if(parseFloat(mostFar) <= 1) {
                        //                         return sortData[0]
                        //                     } else {
                        //                         return "SoFar"
                        //                     }
                                            
                        //                 })
                        //                 .catch((err) => {
                        //                     console.log(err)
                        //                     return res.json({error: err})
                        //                 })
                        //             return testStartReturn
                        //         }))
                        //         .then((resData) => {
                        //             console.log(resData)
                        //             resultCheckBusStop(req.body, resData)
                        //             console.log('Prepare test delete', calData.userId)
                        //             CheckBusStop.deleteOne({userId : calData.userId}).then(() => console.log('delete complete'))
                                    
                        //         })
                        //     })
                        //     console.log(calDisStart21)
                        //     console.log('update end complete')
                                prepareforResultRoute(req.body)
                        // })
                        .catch((error) => {
                            console.log(error)
                            res.status(500).json({ message: error.message });
                        })
                }          
            })
            .catch((err) => {
                console.log(err)
            })

        

    } else {
        return
    }
    
    });

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})