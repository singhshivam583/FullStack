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
    },
    {
        timestamps:true
    }
);

userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();
    const salt= await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    this.confirmPassword=await bcrypt.hash(this.confirmPassword,salt);
    next();
});
// method to compare password for login
userSchema.methods.isValidPassword=async function(password){
    return await bcrypt.compare(password,this.password);
};


export const User = mongoose.model("User", userSchema)
