const express=require('express');
const app=express();
const cors=require('cors');
const userRoute=require('./routes/userRoute');
const DbConnection=require('./config/DbConnection');
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin: "*",
  }));
DbConnection();

app.use('/user',userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`connected successfully ${process.env.PORT}`);
})
