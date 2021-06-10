const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:
	{
		type:String,
		require:true
		
	},
	email:
	{
		type:String,
		require:true,
		unique:32
	},
    password:
	{
		type:String,
		require:true
		
	},
    role:
    {
        type:Number
    }
},
{
	timestamps:true
});
module.exports = mongoose.model('User', UserSchema);

//role 0 , 1 ,2 ,3  admin (project_manager, team leader ,client ) 



