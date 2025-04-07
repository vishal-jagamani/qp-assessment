import { Router } from 'express';

import { getDataController } from '../controllers/user.controller.js';

const router = Router();

router.get('/data', getDataController);

export default router;
