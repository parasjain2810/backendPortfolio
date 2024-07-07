const mongoose=require('mongoose');
require('dotenv').config()
const DbConnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports=DbConnection;
