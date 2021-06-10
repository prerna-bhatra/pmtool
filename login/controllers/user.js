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
        const loginUser=await  User.findOne({email:email });
            if(!loginUser)
            {
                return {
                    status:400,
                    data: "Email does not exists"
                }
            }


            console.log("USER",loginUser)
        const isPasswordValid = bcrypt.compareSync(password, loginUser.password); 

        if(!isPasswordValid)
        {
            return {
                status:400,
                data: "Incorrect"
            }
        }

        const payLoad={_id:loginUser._id,email:loginUser.email,name:loginUser.name ,role:loginUser.role}
        const token=jwt.sign({payLoad:payLoad},process.env.JWT_SECRET,{ expiresIn:"10h" })
        console.log("PAYLOAD",payLoad);

            return {
                status:200,
                data: token
            }
        


    } catch (error) {
        throw error;
        
    }

}














