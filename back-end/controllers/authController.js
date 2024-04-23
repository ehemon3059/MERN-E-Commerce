import userModel from "../models/userModel.js"
import { hashPassword,comparePassword } from './../helpers/authHelper.js';
import JWT from 'jsonwebtoken'

export const registerController = async(req, res) =>{

    try {

       const {name,email,password,phone,address,role} = req.body 

       //validation
       if(!name){
        return res.send({error:"Name is Required"})
       }
       if(!email){
        return res.send({error:"email is Required"})
       }
       if(!password){
        return res.send({error:"password is Required"})
       }
       if(!phone){
        return res.send({error:"phone is Required"})
       }
       if(!address){
        return res.send({error:"address is Required"})
       }
       //check user
       const exisitingUser = await userModel.findOne({email})
       //existing User
       if(exisitingUser){
            return res.status(200).send({
                success:true,
                message:"Already Register Please Login"
            })
       }

       //Register User
       const hashPassword2 = await hashPassword(password)
       //save
       const user = await new userModel({name,email,phone,address,password:hashPassword2}).save();

       res.status(201).send({
        success:true,
        message:"User Register SuccessFully",
        user
       })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Register',
            error
        })
    }
}

export const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body
        //Validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or Password"
            })
        }
        //check User
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registerd"
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message: "Invalid Password"
            })

        }
        //token
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message:"Login successsfully",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }
}


//forgotPassword controller
export const forgotPasswordController = async(req,res)=>{
    try {
        const {email,answer,newPassword} = req.body
        if(!email){
            res.status(400).send({message:"Email is required"})
        }
        if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"New Password is Required"})
        }
        //check
        const user = await userModel.findOne({email,answer})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email Or Answer"
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}

//test controller 
export const testControlller =(req,res)=>{
    try {
        res.send("Protected route")
    } catch (error) {
        console.log(error)
        res.send({error})
    }
}