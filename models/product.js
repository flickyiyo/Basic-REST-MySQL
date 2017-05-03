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


        http://localhost:5000/api/products?table=rest&condition=name='juanjo'&fields='name','price'
        for read method of this class this is the way you pass paramters to the query string
    */ 
    read(req,res){
        let params = req.query;
        let table;
        (!params.table) ? res.status(400).send({message:'bad request'}): table = params.table;
        let fields = (!params.fields) ? '*' : params.fields.toString();
        let condition = (!params.condition) ? '' : `WHERE ${params.condition}` ;
        let limit =(!params.limit) ? '' : `LIMIT ${params.limit}` ;
        let offset = (!params.offset) ? '' : `OFFSET ${params.offset}`;
        let query = `SELECT ${fields} FROM ${table} ${condition} ${limit} ${offset}`;
        console.log(query);
        console.log(['nombre','precio'].toString())
        connection.query(query,(error,result)=>{
            if(error){
                res.status(500).send({error});
            }else{
                res.status(200).send(result);
            }
        })
    }
}