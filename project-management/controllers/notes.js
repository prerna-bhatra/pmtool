const mongoose  = require('mongoose');
const notepad=require('../notes.model');


module.exports.create=async(event)=>
{
    console.log("BODY",event.body);

    return event.body;
}