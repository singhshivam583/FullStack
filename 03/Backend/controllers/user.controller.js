import { User } from "../models/user.model.js"

// async await
const registerUser = async(req, res) => {

    const {fullName, email, phoneNumber, work, password, confirmPassword} = req.body

    if(!fullName || !email || !phoneNumber || !password || !confirmPassword){
        return res.status(400).json({msg: 'Please fill all fields'})
    }

    if(password !== confirmPassword){
        return res.status(400).json({msg:"password doesn't match"})
    }

    const existingUser = await User.findOne({
        $or:[{email}, {phoneNumber}]  //searching for the user by either email or phone number
    })

    if(existingUser){
        return res.status(400).json({msg: 'Email or Phone Number already exists!'})
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

//         user.save().then(() => {
//             res.status(201).json({msg:'User registered successfully'})
//         }).catch((err) => {
//             console.log('error', err);
//             res.status(500).json({msg:'Failed to registered'})
//         })
//     }).catch((err) => {console.log(err)});
// }

export { registerUser } 