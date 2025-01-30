import express from 'express';

const router = express.Router();
import { login, getAllUsers } from '../controllers/userController.js';

router.post('/', login);

router.get('/', getAllUsers);

export default router;