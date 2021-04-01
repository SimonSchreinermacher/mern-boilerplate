import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {TOKEN_SECRET} from '../config/config.js';

//POST /user/register
export const registerUser = (req, res) => {
    const {name, password, email} = req.body;
    User.find({'email': email})
        .exec()
        .then((user) => {
            if(user.length > 0){
                res.status(422).json("Error: Email already in use!");
            }
            else{
                bcrypt.hash(password, 10, (err, hash) =>{
                    if(err){
                        return res.status(500).json({error: err});
                    }
                    const newUser = new User({name: name, password : hash, email: email});
                    newUser.save();
                    res.status(201).json("New User with name " + newUser.name + " created");
                })
            }
        })
};

//GET /user
export const getAllUsers = async(req, res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
};

//GET /user/NAME
export const getUserByName = async(req, res) => {
    const {name} = req.params;
    const user = await User.find({'name' : name});
    res.status(200).json(user);
};

//POST /user/login
export const logUserIn = async(req, res) => {
    const {email, password} = req.body;
    User.find({'email': email})
        .exec()
        .then(user =>{
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(err){
                    return res.status(401).json("Something went wrong");
                }
                if(result){
                    const token = jwt.sign({username: user[0].name}, TOKEN_SECRET, {expiresIn: '1d'})
                    console.log(token);
                    res.status(200).send({token: token});
                }
                else{
                    console.log("Passwords dont match")
                    res.status(400).send("Password not correct");
                }
            })
        })
    
}