import {registerUser, getAllUsers, getUserByName, logUserIn} from '../controller/UserController.js';
import express from 'express';

const router = express.Router();

router.get("/", getAllUsers);           //GET /user
router.post("/register", registerUser); //POST /user
router.get("/:name", getUserByName);    //GET /user/name
router.post("/login", logUserIn);       //POST /user/login    

export default router;
