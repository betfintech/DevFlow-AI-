import { Router } from 'express';
import { chatController } from '../controllers/chatController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

router.post('/sessions', authMiddleware, chatController.createSession);
router.get('/sessions', authMiddleware, chatController.getSessions);
router.get('/sessions/:sessionId/messages', authMiddleware, chatController.getMessages);
router.post('/sessions/:sessionId/messages', authMiddleware, chatController.addMessage);
router.post('/sessions/:sessionId/stream', authMiddleware, chatController.streamMessage);

export default router;