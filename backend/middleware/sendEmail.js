import {transporter} from "./emai.config.js"
export const sendMailer = async (email, code) => {
    try {
        const info = await transporter.sendMail({
            from: '"Ajay Godara👻" <ajaygodara84557@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "email verify ", // Subject line
            text: "verification code", // plain text body
            html:`<h1>your verification code is : ${code}</h1>` // html body
          });
          
     } catch (error) {
        console.log("email send error: ", error)
     }
}