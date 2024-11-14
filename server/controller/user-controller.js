import User from '../models/user.js';

export const signupUser = async(req,res) => {
    try {
        const newUser = new User(req.body);

        await newUser.save();

        res.status(200).json({message: newUser});
        
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "something went wrong while creating new user"});
        
    }
}

export const loginUser = async (req,res)=>{
    try {
        const user =  await User.findOne({email:req.body.email});

        if(!user){
           return res.status(404).json({message:"user not found"});
            
        }
        if(user.password !== req.body.password){
            return res.status(400).json({message: "wrong credentila"})
        }
        const token="random";
        return (
            res.status(200).json({message: "loged in", token}) 
         )
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message: "somethiing went wrong"});
    }
    
    
}
