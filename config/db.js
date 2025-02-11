const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI), 
        console.log("Connected to MongoDB Database");
    }
    catch (error) {
        console.error("Error connecting to MongoDB Database", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;