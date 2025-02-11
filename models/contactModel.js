const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name : {type: String, required : true},
    email : {type: String, required : true, unique: true}, 
    phoneNumber : {type: String, required : true},
    address : {type: String, default: ''},
    createdAt : {type: Date, default: Date.now},
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
