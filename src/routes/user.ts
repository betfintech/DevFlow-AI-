import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

export default router;