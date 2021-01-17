const express = require('express');
const router = express.Router();
const key = require('../../config/keys').secret;
const paramBot = require('../../model/paramBot');
const paramUser = require('../../model/paramUser');

router.post('/createBot', (req, res) => {
    let trainBot = new paramBot({
        paramsBot: '',
        words: []
    })
    trainBot.findOne({
        paramsBot: paramsBot
    }).then(bot => {
        if (bot) {
            return res.status(400).json({
                msg: "This parameter is already taken."
            });
        }
    })
    trainBot.save(function(err){
        if(err){
          console.log(err);
          res.redirect('/chat/startTrain');
          return;
        } else {
            res.redirect('/chat/trainbot');
        }
      });
});