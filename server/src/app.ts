import cors from 'cors';
import express, { Request, Response } from 'express';
import { v1router } from './router';

const app = express();

app.use(express.json());
app.use(cors<Request>());

app.get('/health', (_req, res: Response) => res.json({ status: 'up' }));

app.use('/api/v1', v1router);

export default app;
