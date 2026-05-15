import { Router } from 'express';
import { deploymentController } from '../controllers/deploymentController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

router.get('/', authMiddleware, deploymentController.getDeployments);
router.post('/', authMiddleware, deploymentController.createDeployment);
router.put('/:deploymentId', authMiddleware, deploymentController.updateDeployment);

export default router;