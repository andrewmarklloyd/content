var express    = require('express');
var request    = require('request');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

function sendSlackMessage(req, message) {
  var slack = require("slack-notify")(req.webtaskContext.secrets.SLACK_URL);
  var text = `Blog page request: ${new Date()}`
  slack.send({text: text, username: "webtask-bot", icon_emoji: ":robot_face:"});
}

app.get('/', function (req, response) {
  
  const options = {
    url: 'https://andrewmarklloyd.blogspot.com/feeds/posts/default?alt=json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
  };
  request(options, function(err, res, body) {
    const json = JSON.parse(body);
    response.json(json);
    sendSlackMessage(req, null);
  });
});

module.exports = Webtask.fromExpress(app);
