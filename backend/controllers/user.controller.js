import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import axios from "axios"
import { sendMailer } from "../middleware/sendEmail.js";
export const signup = async (req, res) => {
    const key = process.env.API_KEY
    try {
        const { name, email, password } = req.body

        if (!name) {
            res.status(400).send("name is required")
            return
        }
        if (!email) {
            res.status(400).send("email is required")
            return
        }
        if (!password) {
            res.status(400).send("password is required")
            return
        }
        const user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ message: "user already exist" })
            return

        }

       await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`)
            .then(async (response) => {
               
                if(response.data.deliverability === 'UNDELIVERABLE'){
                    return res.status(400).json({
                        message: "email not exist",
                    })
                }
                const hashPassword = await bcryptjs.hash(String(password), 10)
                const newUser = new User({
                    name,
                    email,
                    password: hashPassword
                })
                await newUser.save()
                const code = Math.floor(100000 + Math.random() * 900000).toString()
                await sendMailer(newUser.email, code)
                return res.status(200).json({
                    message: "user created successfully",
                    user: newUser
                })
               
               
            })
            .catch(error => {
                console.log(error);
                return
            });
       

    } catch (error) {
        console.log(error)
        res.status(500).send("server error")
        return

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            console.log("wrong email");

            res.status(400).json({ message: "invalid eamil" })
            return
        }
        const isPassMatch = await bcryptjs.compare(String(password), String(user.password))

        if (!isPassMatch) {
            console.log("wrong  password");

            res.status(400).json({ message: "wrong password" })
            return

        }
        res.status(200).json({ message: "login successfully", user: user })
        return
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "login faild" })
        return

    }
}