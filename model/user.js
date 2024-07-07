const mongoose=require('mongoose');
const mailsender = require("../utils/mailsender");
const {contactUsEmail} = require("../mail/contactForm.js");
const {clientForm} = require("../mail/clientForm.js");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})


async function sendVerificationEmail(name,email,message) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse1 = await mailsender(contactUsEmail(name,email,message),'akshatjn30902@gmail.com');
		const mailResponse2 = await mailsender(clientForm(name,email,message),email);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

userSchema.pre("save", async function (next) {
	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.name,this.email,this.message);
	}
	next();
});

module.exports=mongoose.model("User",userSchema);