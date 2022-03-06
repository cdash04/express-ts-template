import { Router } from 'express';
import * as ressources from '../ressources/exemple';

const router = Router();

router.get('/', ressources.index);

export default router;
