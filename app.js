'use strict'
var express = require('express');//Require express
var app = express();//Make an app with express
var bodyparser = require('body-parser');//Require body parser
var api = require('./routes/routes');//require the routes of the API
var cors = require('cors');
app.use(bodyparser.urlencoded({extended:false}));//Set unextended urlencoded
app.use(bodyparser.json());//Use JSON
app.use('/api',api);//use / as the route to use the API, for this case it could be http://localhost:1234/myRoute 
//to use myRoute cofigurated function.
//you can do app.use('/customroute',api) and use http://localhost:1234/customroute/myRoute
//also you can add and configure another route file in routes directory with another database
app.use(cors());
/*app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method");
  res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
  res.header("Allow","GET,POST,OPTIONS,PUT,DELETE");
  next();
});//Config to allow All HTTP methods*/

module.exports = app;
