'use strict'
var connection = require('../connections/connection');
module.exports = class {
    constructor(name=null,description=null,price=null){
        this.name = name || '';
        this.description = description || '';
        this.price = price || '';
        this.error = false;
        this.queryset;
    }
    create(req,res){
        let query =`INSERT INTO rest (name,description,price) `
            +`VALUES ("${this.name}","${this.description}",${this.price})`;
        let flag = false;
        let qs;
        connection.query(query,(error,result)=>{
            if(error){
                res.status(500).send({err});
            }else{
                res.status(200).send(result);
            }
        })
    }
    /*
        Send an array of the fields you want to select:
        my_model.read(req,res,fields=['name']) to select name only
        my_model.read(req,res,fields=['name','description']) to select name and description only
        Send a
    */ 
    read(req,res,fields='*',condition=true){
        let query = `SELECT ${fields.toString()} FROM rest `;
        if(condition)
            connection.query(query,(error,result)=>{
                if(error)
                    res.status(500).send({err});
                else
                    if(result)
                        res.status(200).send({result})
                    else
                        res.status(404).send({message:'Not Found'});
            })
    }
}