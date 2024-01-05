import { User } from "../models/user.model.js"
import bcrypt from "bcrypt";

// async await
const registerUser = async(req, res) => {

    const {fullName, email, phoneNumber, work, password, confirmPassword} = req.body
    // console.log(req.body);

    if(!fullName || !email || !phoneNumber || !password || !confirmPassword){
        return res.status(402).json({msg: 'Please fill all fields'})
    }

    if(password !== confirmPassword){
        return res.status(400).json({msg:"password doesn't match"})
    }

    const existingUser = await User.findOne({
        $or:[{email}, {phoneNumber}]  //searching for the user by either email or phone number
    })

    if(existingUser){
        return res.status(401).json({msg: 'Email or Phone Number already exists!'})
    }

    const user = await User.create({
        fullName,
        email:email.toLowerCase(),
        phoneNumber,
        work,
        password,
        confirmPassword,
    })
    // console.log(user);
    const createdUser = await User.findById(user._id).select("-password -confirmPassword")

    // or

    // const user = new User({
    //     fullName,
    //     email:email.toLowerCase(),
    //     phoneNumber,
    //     work,
    //     password,
    //     confirmPassword,
    // })
    // const createdUser = await user.save() 

    if(!createdUser){
        return res.status(500).json({msg:'Something went wrong while registering new user'})
    }
    // console.log(createdUser);
    console.log('User Registered Successfully');
    return res.status(201).json({msg: 'User Registered Successfully', user: createdUser})

}


//Promise
// const registerUser = (req, res) => {

//     const {fullName, email, phoneNumber, work, password, confirmPassword} = req.body

//     if(!fullName || !email || !phoneNumber || !password || !confirmPassword){
//         return res.status(400).json({msg: 'Please fill all fields'})
//     }

//     if(password !== confirmPassword){
//         return res.status(400).json({msg:"password doesn't match"})
//     }

//     User.findOne({email}).then((userExist) => {
//         if (userExist) {
//             return res.status(400).json({msg:'User already exists'});
//         }
//         const user = new User({fullName, email, phoneNumber, password, confirmPassword});
//         
//         user.save().then(() => {
//             res.status(201).json({msg:'User registered successfully'})
//         }).catch((err) => {
//             console.log('error', err);
//             res.status(500).json({msg:'Failed to registered'})
//         })
//     }).catch((err) => {console.log(err)});
// }


// *********************** User Login *********************
const loginUser = async(req, res) => {
 
    const { email, password } = req.body

    if(!email || !password){
        return res.status(402).json({msg: 'Please fill all fields'})
    }

    const userLogin = await User.findOne({email: email})
    if (!userLogin) {
        return res.status(401).json({ msg: "Invalid Email and Password" });
    }
    // console.log(userLogin);

    //******************** compare password *****************
    // const hashPassword = userLogin.password;
    // const comparePassword = await bcrypt.compare(password, hashPassword)
    const isValidPassword = await userLogin.isValidPassword(password)
    // console.log(isValidPassword);
    if(!isValidPassword){
        return res.status(401).json({msg:'Incorrect Password'})
    }

    //**************************** jwt ******************
    const refreshToken = await userLogin.generateRefreshToken()
    // console.log(token);
    if (!refreshToken){
        return res.status(400).json({msg:'Token not found'})
    }

    res.cookie(
        'refreshToken',
        refreshToken,
        {
            httpOnly: true,
            secure:true,
        }
    );

    console.log("User LogedIn Successfully");
    return res.status(201).json({msg:'User LoggedIn Successfully'})

}

export { registerUser, loginUser } 