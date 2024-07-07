const User=require('../model/user');

exports.sendMessage=async (req,res)=>{
    try {
    const {name,email,message}=req.body;

    if(!name||!email||!message){
        return res.status(201).json({
            success:false,
            message:'Fill all the fields'
        })
    }
    
    const newUser=await User.create({
        email:email,
        name:name,
        message:message
    })

    return res.status(202).json({
        success:true,
        message:"Sending Message Successfull",
        newUser:newUser
    })
    
    } catch (error) {
    return res.status(203).json({
        success:false,
        message:"something wrong",
        error
    })
    }
}