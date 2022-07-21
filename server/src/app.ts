import cors from 'cors';
import express, { Request } from 'express';

const app = express();

app.use(express.json());
app.use(cors<Request>());

export default app;
