'use strict';
require('dotenv').config()
const mongoose=require('mongoose');
const {login}=require('./controllers/user')

module.exports.hello = async(event, context, callback) => {

    const connect =await  mongoose.connect("mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/pmtool?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

    let mode = event.queryStringParameters.mode;
    
    if(connect)
    {
        console.log("MODE",mode,"connection",connect);
    }

    let response= "";;
    switch(mode){
        case "login":
            {   
              console.log("login");
             response =await  login(event);
             
            }
        break;
        case 'addUser':
            {
                // only admin can do this 
            }
            break;
        case 'getUser':
            {
                
                //only admin can access 
                
            }
            break;
        default:
            {
                response={ status:404, data:"URL NOT FOUND!"}
            }
        break;
    }
    return {
        statusCode:response.status,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify(response.data)
    }
};


