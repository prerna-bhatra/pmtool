'use strict';
const mongoose=require('mongoose');
const {create}=require('./controllers/notes')

module.exports.hello = async(event, context, callback) => {

    const connect =await  mongoose.connect("mongodb+srv://prerna:Prerna123@cluster0.jokxx.mongodb.net/notepad?retryWrites=true&w=majority",
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
        case "create":
            {   
              console.log("create");
              response=await create(event);
              //  response = await login(event);
            }
        break;
        case 'getNotes':
            {
                //  response=await  update_password(event);
            }
            break;
        case 'getMyNotes':
            {
                
                response=await  adminDetails(event);
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


