import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import testRouter from '@server/routers/testRouter';
import { testFunction } from '@webapp/shared/util2';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 8000;

app.use('/first', testRouter); // Mount the router as middleware at path /first

const testSum2 = testFunction(1, 2);
console.log('Check imports from shared are working properly', testSum2);

app.get('/', (req: Request, res: Response) => {
  const testSum = testFunction(1, 2);
  res.send(`Express + TypeScript with hot refresh pain: test sum ${testSum}`);
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
