import { Router } from 'express';
import { repositoryController } from '../controllers/repositoryController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

router.get('/', authMiddleware, repositoryController.getRepositories);
router.get('/:owner/:repo', authMiddleware, repositoryController.getRepository);
router.get('/:owner/:repo/pulls', authMiddleware, repositoryController.getPullRequests);

export default router;