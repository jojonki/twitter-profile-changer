var gm     = require('gm').subClass({ imageMagick: true });
var inbox    = require('inbox'); 
var security = require('./secret');

var client = inbox.createConnection(false, 'imap.gmail.com', {
  secureConnection: true,
    auth:{
      user: security.gmail.mail,
      pass: security.gmail.pass 
    }
});

client.connect();

client.on('connect', function(){
  console.log('successfullly connected to server');
  client.openMailbox('INBOX', function(error, info){
    if(error) throw error;
  });
});

client.on('close', function (){
  console.log('DISCONNECTED!');
});

client.on('new', function(message){
  console.log('New incoming message ' + message.title);
  if(message.from['address'] == security.app.acceptEmail) {
    GenerateImage(message.title);
  }
});

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
  consumerKey: security.twitter.consumerKey,
  consumerSecret: security.twitter.consumerSecret
});
var	accessToken = security.twitter.accessToken;
var	accessTokenSecret = security.twitter.accessTokenSecret;

function GenerateImage(text) {
  text = text || '';
  if(text.length > 4) {
    console.log('text is long');
    return;
  }

  var x = 125,
      y = 170;
  gm('pic/jonki.png')
    .font('font/setofont.ttf', 100)
    .drawText(x, y, text)
    .write('pic/jonki-out.png', function (err) {
      if(err) {
        console.log(err);
      } else {
        console.log('GenerateImage succeeded');
        console.log(text);
        twitter.updateProfileImage({'image' : 'pic/jonki-out.png'},
          accessToken,
          accessTokenSecret,
          function(error, data, response) {
            if(error) {
              console.log('failed updateProfileImage');
            } else {
              console.log('update profileImage succeed');
            }
          }
          );
      }
    });
} 
