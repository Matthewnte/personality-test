import { Router } from 'express';
import { questionRoute } from './questions';

export const v1router = Router();

questionRoute(v1router);
