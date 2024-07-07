const nodemailer = require("nodemailer");

const mailsender = async (body,email) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'New Client',
                to:`${email}`,
                subject: `Welcome To My Portfolio`,
                html: `${body}`,
            })
            return info;
    }
    catch(error) {
        console.log("okey")
        console.log(error.message);
    }
}


module.exports = mailsender;