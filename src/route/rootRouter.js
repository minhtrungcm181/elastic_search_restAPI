import express from 'express';
import elasticRouter from './elasticRouter.js';

const rootRouter = express.Router();
rootRouter.use('/elastic', elasticRouter);

export default rootRouter;
