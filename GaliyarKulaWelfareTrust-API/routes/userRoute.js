import express from 'express';
const userRouter = express.Router();
import { login, getAllUsers } from '../controllers/userController.js';

userRouter.post('/', login);

userRouter.get('/', getAllUsers);

export default userRouter;