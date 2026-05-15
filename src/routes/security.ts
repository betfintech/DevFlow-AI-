import { Router } from 'express';
import { securityController } from '../controllers/securityController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

router.get('/alerts', authMiddleware, securityController.getAlerts);
router.put('/alerts/:alertId', authMiddleware, securityController.dismissAlert);

export default router;