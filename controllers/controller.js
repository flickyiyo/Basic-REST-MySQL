'use strict'
var connection = require('../connections/connection');
var Product = require('../models/product');
function HelloWorld(req,res){
    res.status(200).send({message:'Hola Mundo!!'});
}
function basicSelect(req,res){
    let select_prods = new Product();
    select_prods.read(req,res);//*/
}
/*{
    'name':'My Name',
    'description':'My Desc',
    'price':'12.12',
}*///Send data in this format, you can test this using Insomnia REST Client, Postman or ARC
function basicInsert(req,res){//We will send all data in JSON and using POST
    
    let params = req.body;
    let new_prod = new Product(params.name,params.description,params.price);
    new_prod.create(req,res);
}

function getParameters(req,res){
    res.status(200).send({parametro:req.query.name});
}




module.exports = {
    HelloWorld,
    basicSelect,
    basicInsert,
    getParameters
}