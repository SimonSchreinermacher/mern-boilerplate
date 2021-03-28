import User from '../models/UserModel.js';

//POST /user
export const addUser = async(req, res) => {
    const {name, password, email} = req.body;
    const newUser = new User({name, password, email});
    await newUser.save();
    res.status(201).json("New User with name " + newUser.name + " created");
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