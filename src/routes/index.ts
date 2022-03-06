import { Router } from 'express';
import exemple from './exemple';

const rootRouter = Router();

rootRouter.use('/', exemple);

export default rootRouter;
