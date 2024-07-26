import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://sachin:Sachin12345@job-portal.qkkcgkc.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;