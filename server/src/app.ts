import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(cors<Request>());

app.get('/health', (_req, res: Response) => res.json({ status: 'up' }));

export default app;
