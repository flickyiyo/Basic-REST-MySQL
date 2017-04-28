'use strict'
var router = require('express').Router();//Call express Router interface
var controller = require('../controllers/controller');//Require the controller to use the methods
router.get('/hello',controller.HelloWorld);//Returns Hello World in Taco :)
router.get('/select',controller.basicSelect);
router.post('/insert',controller.basicInsert);
//Add more routes using your favourite method, remember a RESTful API uses a GET to SELECT, POST to INSERT, PUT tu UPDATE and DELETE is a kind of obvious
module.exports = router;//Export the router
