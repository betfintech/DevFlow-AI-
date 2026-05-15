import jwt, { SignOptions } from 'jsonwebtoken';
import { env } from '../config/env.js';
import { JWTPayload } from '../types/index.js';

export const jwtService = {
  generateToken: (payload: JWTPayload): string => {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '7d' });
  },

  verifyToken: (token: string): JWTPayload => {
    try {
      return jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  },

  decodeToken: (token: string): JWTPayload | null => {
    try {
      return jwt.decode(token) as JWTPayload;
    } catch {
      return null;
    }
  },
};
