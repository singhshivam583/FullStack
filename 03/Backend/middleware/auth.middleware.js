import { User } from "../models/user.model";
import jwt from "jsonwebtoken";


export const verifyJWT = async(req, _, next) => {
    try {
        const token = req.cookies?.refreshtoken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) return res.status(401)
        .send({ 
            auth: false,
            message: 'No token provided.' 
        });
        // Verify the JWT
        const verifiedToken = await jwt.verify(token, process.env.REFRESH_JWT_SECRET)

        const user = await User.findById(verifiedToken?._id).select("-password -confirmPassword")
        if(!user) return res.status(401)
        .send({
            auth:false, 
            message: "User not found."
        })
        req.user = user;
        next();

    } catch (error) {
        console.log(error?.msg)
    }
}