import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        fullName:{
            type: String,
            required: true,
            trim: true,
        },
        email:{
            type:String,
            unique:true,
            lowercase:true,
            required:true,
            trim:true,
            // match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\
            //     \.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        phoneNumber:{
            type:String,
            maxlength:10,
            required:true
        },
        work:{
            type:String,
        },
        password:{
            type: String,
            required: true,
        },
        confirmPassword:{
            type:String,
            required:true,
        },
        refreshTokens: [
            {
                refreshToken:{
                    type:String,
                }
            }
        ],
    },
    {
        timestamps:true
    }
);

//   password encryption 
userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();
    // const salt= await bcrypt.genSalt();
    const salt = 10;
    this.password = await bcrypt.hash(this.password,salt);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword,salt);
    next();
});
// method to compare password for login
userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password,this.password);
};


// JWT 
userSchema.methods.generateAccessToken = async function(){
    try {
        return jwt.sign(
            {
                _id : this._id ,
                fullName : this.fullName,
                email : this.email,
                phoneNumber : this.phoneNumber,
            },
            process.env.ACCESS_JWT_SECRET,
            {
                expiresIn: process.env.ACCESS_JWT_EXPIRY
            }
        )
    } catch (error) {
        console.log("Error in Access Token !!!", error)
    }
    
}
userSchema.methods.generateRefreshToken = async function(){
    try {
        const refreshToken = jwt.sign(
            {
                _id : this._id ,
            },
            process.env.REFRESH_JWT_SECRET,
            {
                expiresIn: process.env.REFRESH_JWT_EXPIRY
            }
        )
        this.refreshTokens = this.refreshTokens.concat({ refreshToken: refreshToken })
        await this.save()
        return refreshToken
    } catch (error) {
        console.log("Error in Refresh Token !!!", error)
    }
}


export const User = mongoose.model("User", userSchema)
