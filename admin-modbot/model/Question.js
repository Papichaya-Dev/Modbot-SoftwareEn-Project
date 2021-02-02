const { Schema, model } = require('mongoose');

//Create Schema
const QuestionSchema = new Schema({
    userId : {
        type : String,
        required : true
    },
    suggestion : [{   
        text : {
            type : String,
            required : false
        },
    }],
    problem : [{   
        text : {
            type : String,
            required : false
        },
    }],
    currentQuestion : {
        type : Boolean,
        required : true 
    },
    currentProblem : {
        type : Boolean,
        required : false
    },
    date : {
        type : Date,
        default: Date.now
    }
})
// {
//     "suggestion": [
//         {
//             "_id": "60154a862e07323464327a71",
//             "text": "อยากให้เพิ่มรถเมล์ครอบคลุมหน้ามจธ.ทั้งหมด"
//         },
//         {
//             "_id": "60154aa12e07323464327a73",
//             "text": "อยากให้มีรถกะป๊อด้วยค่ะ"
//         },
//         {
//             "_id": "60154b2bd033cb275407be25",
//             "text": "อยากให้ใช้งานได้ครอบคลุมทั่วกรุงเทพ"
//         }
//     ],
//     "problem": [
//         {
//             "_id": "60154b04d033cb275407be23",
//             "text": "รถเมล์มาไม่ตรงตามตารางค่ะ"
//         },
//         {
//             "_id": "60154b6bca8c612114c3f6f3",
//             "text": "ดูประวัติย้อนหลังไม่ได้"
//         }
//     ],
//     "answer": [],
//     "_id": "60154a782e07323464327a70",
//     "userId": "U52a63c92cc399ac0d317e68727620643",
//     "currentQuestion": false,
//     "date": "2021-01-30T12:00:56.138Z",
//     "__v": 0,
//     "currentProblem": false
// }

const Question = model('questionfromusers', QuestionSchema)

module.exports = Question 