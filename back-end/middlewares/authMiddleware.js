import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

export const requireSignIn = async (req, res, next) => {
    try {
      // Extract the token from the Authorization header, handling missing or invalid formats
      const authorization = req.headers.authorization;
      if (!authorization || !authorization.startsWith('Bearer ')) {
        return next(new HttpError('Unauthorized. No or invalid token format.', 401));
      }
      const token = authorization.split(' ')[1];
  
      // Verify the token using the correct secret key
      const decoded = await JWT.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      // Handle specific errors (e.g., expired token) or provide a generic unauthorized message if needed
      if (error.name === 'TokenExpiredError') {
        return next(new HttpError('Unauthorized. Token expired.', 401));
      } else {
        return next(new HttpError('Unauthorized. Invalid token.', 403));
      }
    }
  };
  
  //admin access
  export const isAdmin = async(req,res,next) =>{
    try {
      const user = await userModel.findById(req.user._id)
      if(user.role !== 1){
        return res.status(401).send({
          success:false,
          message:'UnAuthorized Access'
        })
      }else{
        next()
      }
    } catch (error) {
      console.log(error)
      res.status(401).send({
        success: false,
        error,
        message:"Error in admin middelware"
      })
    }
  }