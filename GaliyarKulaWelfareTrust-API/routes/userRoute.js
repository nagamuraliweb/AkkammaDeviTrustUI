import express from 'express';

const router = express.Router();
import { getAllUers, login } from '../controllers/userController';

router.get('/api/login', login);

router.get('/api/getAllUsers', getAllUers);

export default router;