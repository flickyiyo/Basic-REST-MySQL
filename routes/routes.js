'use strict'
var router = require('express').Router();//Call express Router interface
var cors = require('cors');
var controller = require('../controllers/controller');//Require the controller to use the methods
//SELECT Paths
router.get('/hello',cors(),controller.HelloWorld);//Returns Hello World in Taco :)
router.get('/products',cors(),controller.basicSelect);
router.get('/products/:limit',cors(),controller.basicSelect);
//Insert Paths
router.post('/insert',cors(),controller.basicInsert);//*/
//Add more routes using your favourite method, remember a RESTful API uses a GET to SELECT, POST to INSERT, PUT tu UPDATE and DELETE is a kind of obvious
module.exports = router;//Export the router
