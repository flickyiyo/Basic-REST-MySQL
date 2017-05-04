'use strict'
var router = require('express').Router();//Call express Router interface
var cors = require('cors');
var secret = require('../config/secret').secret;
var jwt = require('jwt-simple');
var moment = require('moment');
var createToken = require('./createToken');
var controller = require('../controllers/controller');//Require the controller to use the methods

function isAuthorized(req,res,next){
    let payload;
    if(req.headers.authorization){
        try{
            console.log('->'+req.headers.authorization);
            payload = jwt.decode(req.headers.authorization,secret);
            console.log(payload);
        }catch(exception){
            res.status(403).send({message:'Not authorized'});
        }
    }
    console.log(payload.exp);
    if(payload.exp > moment().unix()){
        console.log('passing');
        next()
    }
}
//login path
router.post('/login',cors(),(req,res)=>{
    //login process here
    let token = createToken(req.body.username);
    res.status(200).send({token:token});
})
//SELECT Paths
router.get('/hello',cors(),controller.HelloWorld);//Returns Hello World in Taco :)
router.get('/products',cors(),isAuthorized,controller.basicSelect);
router.get('/products/:limit',cors(),controller.basicSelect);
router.get('/wolo',cors(),controller.getParameters);
//Insert Paths
//Add more routes using your favourite method, remember a RESTful API uses a GET to SELECT, POST to INSERT, PUT tu UPDATE and DELETE is a kind of obvious
router.post('/insert',cors(),isAuthorized,controller.basicInsert);//*/
module.exports = router;//Export the router
