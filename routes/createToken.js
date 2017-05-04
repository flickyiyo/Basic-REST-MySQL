'use strict'
var jwt = require('jwt-simple');
var time_config = require('../config/expiration');
var secret = require('../config/secret').secret;
var expiration = require('../config/expiration');
var moment = require('moment');
module.exports = function createToken(username){
    var payload = {
        sub:username,
        iat:moment().unix(),
        exp:moment().add(expiration.amount_time,expiration.type_time).unix()
    }
    var token = jwt.encode(payload,secret);
    return token;
}