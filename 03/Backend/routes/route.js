import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const userRouter = Router()

    userRouter.route("/register").post(registerUser)

// userRouter.route('/register').get((req, res) => {
//     res.send("hello this is Shivam")
// })

export default userRouter