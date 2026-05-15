import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { pool, initializeDatabase } from './config/database.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Routes
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import repositoryRoutes from './routes/repositories.js';
import deploymentRoutes from './routes/deployments.js';
import securityRoutes from './routes/security.js';
import userRoutes from './routes/user.js';

const app: Express = express();

// Middleware
app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/repositories', repositoryRoutes);
app.use('/api/deployments', deploymentRoutes);
app.use('/api/security', securityRoutes);
app.use('/api/user', userRoutes);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Error handling
app.use(errorHandler);

// Start server
const start = async () => {
  try {
    // Initialize database
    await initializeDatabase();

    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();