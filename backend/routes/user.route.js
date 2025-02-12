import express from "express"
import { signup , login, verifyUserController} from "../controllers/user.controller.js"


const router = express.Router()

router
    .post("/signup",signup)
    .post("/login",login)
    .post("/verifyUser", verifyUserController)

export default router