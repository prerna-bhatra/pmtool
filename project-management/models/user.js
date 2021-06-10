const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title: String,
    description: String
});
module.exports = mongoose.model('User', UserSchema);
