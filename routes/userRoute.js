const express=require('express');
const router=express.Router();
const {sendMessage}=require('../controller/userController')
router.post('/sendMessage',sendMessage);

module.exports=router;