import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';

//POST /user/register
export const registerUser = (req, res) => {
    const {name, password, email} = req.body;
    bcrypt.hash(password, 10, (err, hash) =>{
        if(err){
            return res.status(500).json({error: err});
        }
        const newUser = new User({name: name, password : hash, email: email});
        newUser.save();
        res.status(201).json("New User with name " + newUser.name + " created");
    })
    
};

//GET /user
export const getAllUsers = async(req, res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
};

//GET /user/name
export const getUserByName = async(req, res) => {
    const {name} = req.params;
    const user = await User.find({'name' : name})
    res.status(200).json(user);
};

//POST /user/login
export const logUserIn = async(req, res) => {
    const {name, password} = req.body;
    User.find({'name': name})
        .exec()
        .then(user =>{
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(err){
                    return res.status(401).json("Something went wrong");
                }
                if(result){
                    console.log("Passwords match")
                }
            })
        })
    
}