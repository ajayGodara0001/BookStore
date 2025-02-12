import nodemailer from "nodemailer"

export default  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "ajaygodara84557@gmail.com",
        pass: "ctgm gsyg erhq awpy",
    },
  });