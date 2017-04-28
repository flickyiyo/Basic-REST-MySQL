'use strict'
var app = require('./app');
var port = process.env.PORT || 5000;
var connection = require('./connections/connection');
connection.connect(function(err){
    if (err){
        throw err;
    }else{
        app.listen(port,function(){
            console.log('Working: http://localhost:'+port);
        })
    }
})
