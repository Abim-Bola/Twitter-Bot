//jshint esversion:6
require('dotenv').config();
const twitter = require('twitter-lite');
const config = require('./src/config/key');
const client = new twitter(config);


 

  

function tweetIt () {
const tweets = [
  "You are beautiful", 
"You are doing amazing", 
"You are awesome"
];

const randomTweets = tweets[Math.floor(Math.random() * tweets.length)];

console.log(randomTweets);

client.post('statuses/update', { status: "Daily Affirmation:" + " " + randomTweets }).then(result => {
    console.log('You successfully tweeted this : "' + result.text + '"');
  }).catch(console.error);

}

setInterval(tweetIt, 1000*60*10);
tweetIt();