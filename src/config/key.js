//jshint esversion:6
require('dotenv').config();

module.exports = {
    consumer_key: process.env.APIKEY,
    consumer_secret: process.env.APISECRETKEY,
    access_token_key: process.env.ACCESSTOKEN,
    access_token_secret: process.env.ACCESSTOKENSECRET 
};

const name = "bola";

console.log(name);

