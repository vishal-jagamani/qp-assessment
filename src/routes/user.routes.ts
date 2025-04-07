import { Router } from 'express';

import { createUserOrderController, getAllGroceriesController } from '../controllers/user.controller.js';

const router = Router();

router.get('/groceries', getAllGroceriesController);

router.post('/orders', createUserOrderController);

export default router;
