var request = require("request");

// Your Channel access token
const config = require('./config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};





exports.function1 = (bodyResponse) => {
  let result;
  result = 5 * 10;
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
            "type": "template",
          "altText": "this is a buttons template",
          "template": {
              "type": "buttons",
              // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
              "title": "อัตราค่าโดยสาร",
              "text": "กรุณาเลือกประเภทรถโดยสาร",
              "actions": [{
                  "type": "postback",
                  "text" : "ราคารถเมล์",
                  "label": "รถเมล์",
                  "data": "action=buy&itemid=123"
              }, {
                  "type": "postback",
                  "label": "รถแดง",
                  "data": "action=add&itemid=123"
              }, {
                  "type": "uri",
                  "label": "รถตู้",
                  "uri": "http://example.com/page/123"
              }]
          }
        },
      ],
    }),
  });
};

exports.function2 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "function 2",
        },
      ],
    }),
  });
};

exports.function3 = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: "function 3",
        },
      ],
    }),
  });
};

exports.function4 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
              "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                // "thumbnailImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/133740341_224283145810829_4835446052325232879_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_eui2=AeEz4SAc1nWpZHLFEbEZnSVTc3Fv_NXb_z9zcW_81dv_P0F4X-wYRaM8GdR1vCjiU4zJrO9HtJ0A7rFj6tlnyHCY&_nc_ohc=2vUNSr1Mu2wAX_2wRte&_nc_ht=scontent.fbkk26-1.fna&oh=ca7e9e807e1ae2468e29e8ab1728bd55&oe=6011FA7D",
                "title": "อัตราค่าโดยสาร",
                "text": "กรุณาเลือกประเภทรถโดยสาร",
                "actions": [{
                    "type": "postback",
                    "text" : "ราคารถเมล์",
                    "label": "รถเมล์",
                    "data": "action=buy&itemid=123"
                }, {
                    "type": "postback",
                    "label": "รถแดง",
                    "data": "action=add&itemid=123"
                }, {
                    "type": "uri",
                    "label": "รถตู้",
                    "uri": "http://example.com/page/123"
                }]
            }
          },
        ],
      }),
    });
  };

exports.cost = (bodyResponse) => {
    let result;
    result = 5 * 10;
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            "text": `${result}`,
          },
        ],
      }),
    });
  };

exports.hellomessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "หวัดดี",
          },
          {
            "type": "sticker",
            "packageId": "1",
            "stickerId": "1"
          }
        ],
      }),
    });
  };
  
exports.function5 = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "function 4",
          },
        ],
      }),
    });
};

exports.errormessage = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: `text`,
            text: "ไม่ตรง",
          },
        ],
      }),
    });
};