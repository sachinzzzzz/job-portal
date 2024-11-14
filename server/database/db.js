import mongoose from "mongoose";

const DBConnection = async () => {

    //const MONGO_URI = `mongodb+srv://sachin:Sachin12345@job-portal.qkkcgkc.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;
    // const MONGO_URI = "mongodb://localhost:27017/jobPortal";
    // try {
    //     await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    //     console.log('Database connected successfully');
    // } catch (error) {
    //     console.log('Error while connecting with the database ', error.message);
    // }

    mongoose.connect('mongodb://127.0.0.1:27017/job-board')
    .then(() =>{
        console.log("database is connected")
    })
    .catch((err) => console.log("something is wrong", err));
}

export default DBConnection;