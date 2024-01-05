import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";


const userRouter = Router()

    userRouter.route("/api/register").post(registerUser)

// userRouter.route('/register').get((req, res) => {
//     res.send("hello this is Shivam")
// })

    userRouter.route("/login").post(loginUser)

    userRouter.route('/contact').get((req, res) => {
        res.cookie("test","Shivam");
        res.send('Hello from contact')
    })

export default userRouter