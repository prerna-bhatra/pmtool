const mongoose  = require('mongoose');
const jwt       = require('jsonwebtoken');
const bcrypt    = require("bcryptjs");
const User=require('../models/user');


module.exports.login=async(event)=>
{
    try {
        let body=JSON.parse(event.body);
        const email =body.email;
        const password=body.password;    
        const loginUser=await  User.findOne({email:email },{password:1});
            if(!loginUser)
            {
                return {
                    status:400,
                    data: "Email does not exists"
                }
            }
        const isPasswordValid = bcrypt.compareSync(password, loginUser.password); 

        if(!isPasswordValid)
        {
            return {
                status:400,
                data: "Incorrect Password"
            }
        }


    
        
    } catch (error) {
        
    }

}














