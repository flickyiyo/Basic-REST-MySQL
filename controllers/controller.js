'use strict'
var connection = require('../connections/connection');
function HelloWorld(req,res){
    res.status(200).send({message:'Hola Mundo!!'});
}
function basicSelect(req,res){
    let query = 'SELECT * FROM rest';
    connection.query(query,(error,result)=>{
        if(error){
            res.status(500).send({message:'Error',err:error})
        }else{
            res.status(200).send(result);
        }
    })
}
function basicInsert(req,res){//We will send all data in JSON and using POST
    /*{
        'name':'My Name',
        'description':'My Desc',
        'price':'12.12',
    }*///Send data in this format, you can test this using Insomnia REST Client, Postman or ARC
    let params = req.body;
    let query = `INSERT INTO rest (name,description,price)`
                +` VALUES ("${params.name}","${params.description}",${params.price})`;
    connection.query(query,function(error,result){
        if(error){
            res.status(500).send({message:'Error',err:error});//
        }else{
            res.status(200).send({result})
        }
    })

}


module.exports = {
    HelloWorld,
    basicSelect,
    basicInsert
}