import express from 'express';
import {registerController,loginController,testControlller, forgotPasswordController} from '../controllers/authController.js'
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'

//router object
const router = express.Router()


//routing 
//REGISTER || METHOD POST
router.post('/register', registerController)

//login || Method POST
router.post('/login', loginController)

//forgot password || method POST
router.post('/forgot-password',forgotPasswordController)

//test route
router.get('/test',requireSignIn,isAdmin,testControlller)

//protected route auth
router.get("/user-auth", requireSignIn , (req,res)=>{
    res.status(200).send({ok: true});
});
export default router;