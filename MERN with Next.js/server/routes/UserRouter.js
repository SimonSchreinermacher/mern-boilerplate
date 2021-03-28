import {addUser, getAllUsers, getUserByName} from '../controller/UserController.js';
import express from 'express';

const router = express.Router();

router.get("/", getAllUsers);           //GET /user
router.post("/", addUser);              //POST /user
router.get("/:name", getUserByName);    //GET /user/name

export default router;
