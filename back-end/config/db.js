import mongoose from "mongoose";
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`conneted to Mongodb Database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in mongo db ${error}`.bgRed.white)
    }
}

export default connectDB;