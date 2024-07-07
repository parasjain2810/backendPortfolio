const express=require('express');
const app=express();
const cors=require('cors');

const DbConnection=require('./config/DbConnection');
const { sendMessage } = require('./controller/userController');
require('dotenv').config();


app.use(express.json());
app.use(cors({
    origin: "*",
  }));
DbConnection();

app.post('/user/sendMessage',sendMessage);

app.get("/",(req,res)=>{
  res.send("hello");
})

app.listen(process.env.PORT,()=>{
    console.log(`connected successfully ${process.env.PORT}`);
})
