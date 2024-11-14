import mongoose from 'mongoose';

const UserSchema =  new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    // role:{
    //     type: String,
    //     required: true,
    //     enum: ["recruiter", "job_seeker"]
    // },
});

const User = mongoose.model('user', UserSchema);

export default User;