var request = require("request");

// Your Channel access token
const config = require('../config')

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${config.channelAccessToken}`,
};

exports.functionmenu4 = (bodyResponse) => {
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

exports.selectnumbus = (bodyResponse) => {
    return request({
      method: `POST`,
      uri: `${LINE_MESSAGING_API}/reply`,
      headers: LINE_HEADER,
      body: JSON.stringify({
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            "type": `text`,
            "text": `กรุณาเลือกราคาสายรถเมล์ที่คุณอยากทราบด้านล่างได้เลยค่า 💸👇`,
          },
          {
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
              "type": "bubble",
              "hero": {
                "type": "image",
                "url": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.0-9/12108903_10208180116724645_3631630818427710441_n.jpg?_nc_cat=110&ccb=2&_nc_sid=825194&_nc_ohc=ZkrUXDYfiTEAX9VB4hq&_nc_ht=scontent.fbkk26-1.fna&oh=49945cccddc005126c6446a5517ad84c&oe=6020CAB9",
                "size": "full",
                "aspectRatio": "20:13",
                "aspectMode": "cover"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.140",
                      "text": "ปอ.140"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.141",
                      "text": "ปอ.141"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.75",
                      "text": "ปอ.75"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "ปอ.21",
                      "text": "ปอ.21"
                    },
                    "color": "#2E3F47FF",
                    "style": "primary"
                  }
                ]
              }
            }
        }
        ],
      }),
    });
  };

exports.cost140 = (bodyResponse) => {
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
            // "text": `${result}`,
            "text": `ตารางค่าโดยสาร รถเมล์สายปอ.140 ค่า✨`,
          },
          {
            "type": `text`,
            "text": `1. สายปอ.140 สีส้ม 🧡 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=5idCW8bpP8kAX8rWPXY&_nc_ht=scontent.fbkk26-1.fna&oh=113efc92f87c99487da7fd2443d96758&oe=60212F99",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137622782_438753510493430_1685445233253631429_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=5idCW8bpP8kAX8rWPXY&_nc_ht=scontent.fbkk26-1.fna&oh=113efc92f87c99487da7fd2443d96758&oe=60212F99"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.140 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=kfj6aaGc92oAX_dca9Y&_nc_ht=scontent.fbkk26-1.fna&oh=6532a7c089a3ebe90772fbafbbc1715c&oe=60215F74",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137544527_396241328348727_908912891211030604_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=kfj6aaGc92oAX_dca9Y&_nc_ht=scontent.fbkk26-1.fna&oh=6532a7c089a3ebe90772fbafbbc1715c&oe=60215F74"
          }
        ],
      }),
    });
  };

  exports.cost141 = (bodyResponse) => {
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
            // "text": `${result}`,
            "text": `ตารางค่าโดยสาร รถเมล์สายปอ.141 ค่า✨`,
          },
          {
            "type": `text`,
            "text": `1. สายปอ.141 สีส้ม 🧡 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=gZenmyPZrQsAX-3akhX&_nc_ht=scontent.fbkk26-1.fna&oh=afb4c5faf1dca05b8ca0d1a9a8c5d642&oe=6020204B",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/137621467_235703318067874_9159980072699741669_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=gZenmyPZrQsAX-3akhX&_nc_ht=scontent.fbkk26-1.fna&oh=afb4c5faf1dca05b8ca0d1a9a8c5d642&oe=6020204B"
          },
          {
            "type": `text`,
            "text": `2. สายปอ.141 สีฟ้า 💙 `,
          },
          {
          "type": "image",
          "originalContentUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=ZAkO3Ap-lJ8AX-SNfnD&_nc_ht=scontent.fbkk26-1.fna&oh=4a0244c6f55dcd34ede0b836c356e2e4&oe=6021768B",
          "previewImageUrl": "https://scontent.fbkk26-1.fna.fbcdn.net/v/t1.15752-9/138205842_412562036722784_8621213197609621652_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=ZAkO3Ap-lJ8AX-SNfnD&_nc_ht=scontent.fbkk26-1.fna&oh=4a0244c6f55dcd34ede0b836c356e2e4&oe=6021768B"
          }
        ],
      }),
    });
  };