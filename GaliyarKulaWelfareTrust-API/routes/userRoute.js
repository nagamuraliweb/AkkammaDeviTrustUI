import express from 'express';

const router = express.Router();
import { getAllUsers, login } from '../controllers/userController';

router.get('/api/login', login());

router.get('/api/getAllUsers', getAllUsers());

export default router;